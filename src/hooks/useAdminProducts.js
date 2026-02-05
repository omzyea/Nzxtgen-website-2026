import { useState, useCallback } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const initialNewItem = {
  name: "",
  price: "",
  packageIncludes: [""],
  features: [""],
  img: "",
};

export function useAdminProducts() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgReady, setImgReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newItem, setNewItem] = useState(initialNewItem);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setProducts(items);
      setAllProducts(items);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  const handleDelete = useCallback(async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts((prev) => prev.filter((item) => item.id !== id));
      setAllProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Error deleting item");
    }
  }, []);

  const handleEdit = useCallback((id) => {
    const product = products.find((item) => item.id === id);
    if (product) {
      setNewItem({
        name: product.name,
        price: product.price,
        packageIncludes: product.packageIncludes || [""],
        features: product.features || [""],
        img: product.img || "",
      });
      setEditId(id);
      setIsEditing(true);
      setImgReady(true);
      setShowModal(true);
    }
  }, [products]);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleArrayChange = useCallback((type, idx, value) => {
    setNewItem((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) => (i === idx ? value : item)),
    }));
  }, []);

  const handleAddField = useCallback((type) => {
    setNewItem((prev) => ({ ...prev, [type]: [...prev[type], ""] }));
  }, []);

  const handleRemoveField = useCallback((type, idx) => {
    setNewItem((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== idx),
    }));
  }, []);

  const openCloudinaryWidget = useCallback(() => {
    if (typeof window.cloudinary === "undefined") return;
    window.cloudinary.openUploadWidget(
      {
        cloudName: "drfjayoje",
        uploadPreset: "omarellai",
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#FFFFFF",
            sourceBg: "#F4F4F5",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            inactiveTabIcon: "#69778A",
            menuIcons: "#0078FF",
            link: "#0078FF",
            action: "#0078FF",
            inProgress: "#0078FF",
            complete: "#20B832",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
        },
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setNewItem((prev) => ({ ...prev, img: result.info.secure_url }));
          setImgReady(true);
        }
      }
    );
  }, []);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing && editId) {
        await updateDoc(doc(db, "products", editId), {
          name: newItem.name,
          price: parseFloat(newItem.price),
          packageIncludes: newItem.packageIncludes.filter(Boolean),
          features: newItem.features.filter(Boolean),
          img: newItem.img,
        });
        setProducts((prev) =>
          prev.map((item) =>
            item.id === editId
              ? { ...item, ...newItem, price: parseFloat(newItem.price) }
              : item
          )
        );
        setAllProducts((prev) =>
          prev.map((item) =>
            item.id === editId
              ? { ...item, ...newItem, price: parseFloat(newItem.price) }
              : item
          )
        );
      } else {
        const docRef = await addDoc(collection(db, "products"), {
          name: newItem.name,
          price: parseFloat(newItem.price),
          packageIncludes: newItem.packageIncludes.filter(Boolean),
          features: newItem.features.filter(Boolean),
          img: newItem.img,
        });
        const newProduct = {
          id: docRef.id,
          ...newItem,
          price: parseFloat(newItem.price),
        };
        setProducts((prev) => [...prev, newProduct]);
        setAllProducts((prev) => [...prev, newProduct]);
      }
      setNewItem(initialNewItem);
      setImgReady(false);
      setShowModal(false);
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      alert("Error saving item");
    }
    setLoading(false);
  }, [isEditing, editId, newItem]);

  const openProductModal = useCallback((item) => {
    setModalItem(item);
    setIsModalOpen(true);
  }, []);

  const closeProductModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openAddProductModal = useCallback(() => {
    setShowModal(true);
    setIsEditing(false);
    setEditId(null);
    setNewItem(initialNewItem);
    setImgReady(false);
  }, []);

  const closeAddProductModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return {
    products,
    setProducts,
    allProducts,
    loading,
    imgReady,
    showModal,
    setShowModal,
    isEditing,
    editId,
    newItem,
    setNewItem,
    searchTerm,
    setSearchTerm,
    modalItem,
    isModalOpen,
    fetchProducts,
    handleDelete,
    handleEdit,
    handleFormChange,
    handleArrayChange,
    handleAddField,
    handleRemoveField,
    openCloudinaryWidget,
    handleFormSubmit,
    openProductModal,
    closeProductModal,
    openAddProductModal,
    closeAddProductModal,
  };
}
