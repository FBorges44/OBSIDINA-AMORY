"use client";
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  badge?: "new" | "sale" | "exclusive" | null;
  emoji: string;
  color: string;
  category: "feminino" | "masculino" | "kids" | "acessorios";
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  tags: string[];
};

export type CartItem = {
  product: Product;
  size: string;
  colorName: string;
  qty: number;
};

const DEFAULT_PRODUCTS: Product[] = [
  { id: "1", name: "Blazer Alfaiataria Premium", brand: "Obsidian", price: 489, oldPrice: undefined, badge: "new", emoji: "🧥", color: "#2d2520", category: "feminino", sizes: ["PP","P","M","G","GG"], colors: [{ name: "Preto", hex: "#1a1a1a" }, { name: "Caramelo", hex: "#c8a96e" }], description: "Blazer de alfaiataria com corte moderno e tecido premium. Ideal para o ambiente de trabalho ou para elevar qualquer look casual.", tags: ["blazer","alfaiataria","trabalho"] },
  { id: "2", name: "Vestido Midi Plissado", brand: "Obsidian", price: 329, oldPrice: 549, badge: "sale", emoji: "👗", color: "#252025", category: "feminino", sizes: ["PP","P","M","G"], colors: [{ name: "Vinho", hex: "#4a1020" }, { name: "Preto", hex: "#1a1a1a" }], description: "Vestido midi com plissado delicado, perfeito para ocasiões especiais ou jantares. O caimento fluido valoriza a silhueta.", tags: ["vestido","midi","plissado"] },
  { id: "3", name: "Calça Wide Leg Linho", brand: "Studio", price: 279, oldPrice: undefined, badge: "exclusive", emoji: "👖", color: "#202028", category: "feminino", sizes: ["34","36","38","40","42"], colors: [{ name: "Off White", hex: "#f5f0e8" }, { name: "Bege", hex: "#d4c4a8" }, { name: "Preto", hex: "#1a1a1a" }], description: "Calça wide leg em linho de alta qualidade. Conforto e elegância para o dia a dia, com caimento largo e fluido.", tags: ["calca","wide leg","linho","conforto"] },
  { id: "4", name: "Trench Coat Cinto", brand: "Obsidian", price: 699, oldPrice: undefined, badge: "new", emoji: "🧣", color: "#282020", category: "feminino", sizes: ["P","M","G"], colors: [{ name: "Camel", hex: "#c4a882" }, { name: "Preto", hex: "#1a1a1a" }], description: "Trench coat clássico com cinto ajustável. Uma peça atemporal que transforma qualquer look.", tags: ["casaco","trench coat","classico"] },
  { id: "5", name: "Saia Midi Plissada", brand: "Studio", price: 219, oldPrice: 319, badge: "sale", emoji: "🌸", color: "#22201f", category: "feminino", sizes: ["PP","P","M","G","GG"], colors: [{ name: "Rosa", hex: "#d4537e" }, { name: "Bege", hex: "#d4c4a8" }], description: "Saia midi plissada com cintura elástica. Versátil e elegante para diversas ocasiões.", tags: ["saia","midi","plissada"] },
  { id: "6", name: "Conjunto Cropped Linho", brand: "Maison", price: 399, oldPrice: undefined, badge: null, emoji: "✨", color: "#1e1e1e", category: "feminino", sizes: ["PP","P","M","G"], colors: [{ name: "Branco", hex: "#f5f0e8" }, { name: "Cáqui", hex: "#8b7355" }], description: "Conjunto cropped + calça em linho premium. Sofisticado e confortável para o verão.", tags: ["conjunto","linho","cropped"] },
  { id: "7", name: "Blusa Oversized Cetim", brand: "Vérité", price: 189, oldPrice: undefined, badge: "new", emoji: "👕", color: "#201f22", category: "feminino", sizes: ["P","M","G","GG"], colors: [{ name: "Champagne", hex: "#f0e0c0" }, { name: "Preto", hex: "#1a1a1a" }], description: "Blusa oversized em cetim com acabamento refinado. Confortável e elegante.", tags: ["blusa","cetim","oversized"] },
  { id: "8", name: "Vestido Longo Floral", brand: "Arc & Co", price: 459, oldPrice: 689, badge: "sale", emoji: "🌺", color: "#22201e", category: "feminino", sizes: ["PP","P","M","G"], colors: [{ name: "Floral Rosa", hex: "#d4537e" }, { name: "Floral Azul", hex: "#378add" }], description: "Vestido longo com estampa floral exclusiva. Leveza e elegância para os dias quentes.", tags: ["vestido","longo","floral","estampa"] },
  { id: "9", name: "Camisa Social Slim", brand: "Obsidian", price: 259, oldPrice: undefined, badge: "new", emoji: "👔", color: "#1e2030", category: "masculino", sizes: ["P","M","G","GG","XG"], colors: [{ name: "Branco", hex: "#f5f0e8" }, { name: "Azul", hex: "#185fa5" }, { name: "Preto", hex: "#1a1a1a" }], description: "Camisa social slim fit em algodão egípcio. Acabamento premium para o executivo moderno.", tags: ["camisa","social","slim","trabalho"] },
  { id: "10", name: "Calça Chino Algodão", brand: "Studio", price: 319, oldPrice: 429, badge: "sale", emoji: "👖", color: "#2a2018", category: "masculino", sizes: ["38","40","42","44","46"], colors: [{ name: "Cáqui", hex: "#8b7355" }, { name: "Navy", hex: "#1a2030" }], description: "Calça chino em algodão com corte moderno. Versátil para o trabalho e o lazer.", tags: ["calca","chino","masculino"] },
  { id: "11", name: "Jaqueta Bomber Couro", brand: "Elementar", price: 899, oldPrice: undefined, badge: "exclusive", emoji: "🧥", color: "#181818", category: "masculino", sizes: ["P","M","G","GG"], colors: [{ name: "Preto", hex: "#1a1a1a" }, { name: "Marrom", hex: "#4a3020" }], description: "Jaqueta bomber em couro legítimo com forro interno. Peça de destaque para qualquer guarda-roupa.", tags: ["jaqueta","bomber","couro","exclusivo"] },
  { id: "12", name: "Tênis Lifestyle Branco", brand: "Forma", price: 449, oldPrice: undefined, badge: "new", emoji: "👟", color: "#e0dcd4", category: "masculino", sizes: ["38","39","40","41","42","43"], colors: [{ name: "Branco", hex: "#f5f0e8" }, { name: "Off Black", hex: "#2a2a2a" }], description: "Tênis lifestyle em couro com sola em borracha vulcanizada. O clássico que nunca sai de moda.", tags: ["tenis","lifestyle","couro"] },
];

type StoreCtx = {
  products: Product[];
  cart: CartItem[];
  addProduct: (p: Omit<Product, "id">) => void;
  addToCart: (product: Product, size: string, colorName: string) => void;
  removeFromCart: (productId: string, size: string, colorName: string) => void;
  updateQty: (productId: string, size: string, colorName: string, qty: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
};

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("obsidian_cart");
      if (saved) setCart(JSON.parse(saved));
      const savedProds = localStorage.getItem("obsidian_products");
      if (savedProds) {
        const custom = JSON.parse(savedProds) as Product[];
        setProducts([...DEFAULT_PRODUCTS, ...custom]);
      }
    } catch {}
  }, []);

  const saveCart = (c: CartItem[]) => {
    setCart(c);
    localStorage.setItem("obsidian_cart", JSON.stringify(c));
  };

  const addProduct = useCallback((p: Omit<Product, "id">) => {
    const newP: Product = { ...p, id: Date.now().toString() };
    setProducts(prev => {
      const updated = [...prev, newP];
      const custom = updated.filter(x => !DEFAULT_PRODUCTS.find(d => d.id === x.id));
      localStorage.setItem("obsidian_products", JSON.stringify(custom));
      return updated;
    });
  }, []);

  const addToCart = useCallback((product: Product, size: string, colorName: string) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id && i.size === size && i.colorName === colorName);
      const updated = idx >= 0
        ? prev.map((i, n) => n === idx ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { product, size, colorName, qty: 1 }];
      localStorage.setItem("obsidian_cart", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeFromCart = useCallback((productId: string, size: string, colorName: string) => {
    setCart(prev => {
      const updated = prev.filter(i => !(i.product.id === productId && i.size === size && i.colorName === colorName));
      localStorage.setItem("obsidian_cart", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateQty = useCallback((productId: string, size: string, colorName: string, qty: number) => {
    setCart(prev => {
      const updated = qty <= 0
        ? prev.filter(i => !(i.product.id === productId && i.size === size && i.colorName === colorName))
        : prev.map(i => i.product.id === productId && i.size === size && i.colorName === colorName ? { ...i, qty } : i);
      localStorage.setItem("obsidian_cart", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("obsidian_cart");
  }, []);

  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <Ctx.Provider value={{ products, cart, addProduct, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be inside StoreProvider");
  return ctx;
}