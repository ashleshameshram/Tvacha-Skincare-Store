import serum1 from '../assets/serum1.png'
import serum2 from '../assets/serum2.png'
import serum3 from '../assets/serum3.png'
import cleanser1 from '../assets/cleanser1.png'
import cleanser2 from '../assets/cleanser2.png'
import moisturizer1 from '../assets/Moisturizer1.png'
import moisturizer2 from '../assets/Moisturizer2.png'
import kit1 from '../assets/kit1.jpeg'
import kit2 from '../assets/kit2.jpeg'
import mask1 from '../assets/mask1.jpeg'
import mask2 from '../assets/mask2.png'
import suncare from '../assets/suncare.png'

const products = [
    {
        id: 1,
        name: "Fresh Start Gel Cleanser",
        category: "Cleansers",
        price: 299,
        badge:"Bestseller",
        image: cleanser2,
        description: "A gentle daily gel cleanser that lifts dirt and excess oil without leaving skin tight.",
        ingredients: ["Neem", "Salicylic acid", "Aloe"],
        howToUse: "Massage onto damp skin for 30 seconds, then rinse with water. Use morning and night.",
    },
    {
        id: 2,
        name: "Cloud Foam Face Wash",
        category: "Cleansers",
        price: 249,
        badge: "",
        image: cleanser1,
        description: "A soft, airy foam that cleans gently and leaves skin feeling fresh and comfortable.",
        ingredients: ["Aloe", "Oat", "Glycerin"],
        howToUse: "Pump into wet hands, lather and wash your face. Rinse well.",
    },
    { 
        id: 3, 
        name: "Glow Up Vitamin C Serum", 
        category: "Serums", 
        price: 499, 
        badge: "Bestseller", 
        image: serum3,
        description: "A lightweight daily serum with 10% Vitamin C to brighten dull skin and even out tone.",
        ingredients: ["Vitamin C", "Hyaluronic acid", "Aloe"],
        howToUse: "Apply 3-4 drops after cleansing, then follow with moisturizer and sunscreen." 
    },
    { 
        id: 4, 
        name: "Hydra Drop Serum", 
        category: "Serums", 
        price: 449, 
        badge: "", 
        image: serum1,
        description: "A water-light serum that gives skin an instant drink of hydration.",
        ingredients: ["Hyaluronic acid", "Glycerin", "Panthenol"],
        howToUse: "Apply 3-4 drops on damp skin and pat in. Use morning and night." 
    },
    { 
        id: 5, 
        name: "Clear Skin Niacinamide Serum", 
        category: "Serums", 
        price: 399, 
        badge: "New", 
        image: serum2,
        description: "A 5% Niacinamide serum that helps balance oil and refine the look of pores.",
        ingredients: ["Niacinamide", "Zinc", "Aloe"],
        howToUse: "Apply 3-4 drops on clean skin, once or twice a day." 
    },
    { 
        id: 6, 
        name: "Dew Drop Gel Cream", 
        category: "Moisturizers", 
        price: 349, 
        badge: "Bestseller", 
        image: moisturizer1,
        description: "An oil-free gel cream that keeps skin hydrated and dewy all day without feeling heavy.",
        ingredients: ["Aloe", "Squalane", "Hyaluronic acid"],
        howToUse: "Take a pea-sized amount and smooth over face and neck after serum." 
    },
    { 
        id: 7, 
        name: "Barrier Boost Moisturizer", 
        category: "Moisturizers", 
        price: 399, 
        badge: "", 
        image: moisturizer2,
        description: "A richer cream that helps support and comfort the skin barrier.",
        ingredients: ["Ceramides", "Shea butter", "Panthenol"],
        howToUse: "Apply a thin layer to face and neck, morning and night."
    },
    { 
        id: 8, 
        name: "Sun Shield SPF 50", 
        category: "Sun care", 
        price: 449, 
        badge: "Bestseller", 
        image: suncare,
        description: "A lightweight, non-greasy sunscreen made for everyday wear under the Indian sun.",
        ingredients: ["Zinc oxide", "Green tea", "Vitamin E"],
        howToUse: "Apply two finger-lengths to face and neck as the last step. Reapply every 2-3 hours outdoors." 
    },
    { 
        id: 9, 
        name: "Haldi Glow Clay Mask", 
        category: "Masks", 
        price: 329, 
        badge: "New", 
        image: mask2,
        description: "A weekly clay mask with turmeric that leaves skin feeling clean and smooth.",
        ingredients: ["Turmeric", "Kaolin clay", "Honey"],
        howToUse: "Apply a thin layer, leave for 10 minutes, then rinse. Use once or twice a week." 
    },
    { 
        id: 10, 
        name: "Rose Sleeping Mask", 
        category: "Masks", 
        price: 379, 
        badge: "", 
        image: mask1,
        description: "An overnight mask that leaves skin soft and plump by morning.",
        ingredients: ["Rose water", "Glycerin", "Squalane"],
        howToUse: "Apply as the last step at night and rinse in the morning." 
    },
    { 
        id: 11, 
        name: "Starter Routine Kit", 
        category: "Kits", 
        price: 799, 
        badge: "New", 
        image: kit1,
        description: "Your 3-step routine in one box: cleanser, serum and moisturizer.",
        ingredients: ["Gel Cleanser", "Vitamin C Serum", "Gel Cream"],
        howToUse: "Cleanse, apply serum, then moisturize. Morning and night." 
    },
    { 
        id: 12, 
        name: "Glow Duo Kit", 
        category: "Kits", 
        price: 849, 
        badge: "", 
        image: kit2,
        description: "Your morning glow pair: Vitamin C Serum plus Sun Shield SPF 50.",
        ingredients: ["Vitamin C Serum", "Sun Shield SPF 50"],
        howToUse: "Use the serum first, then finish with sunscreen every morning." 
    },
];

export const categories = ["All","Cleansers","Serums","Moisturizers", "Sun care", "Masks", "Kits"];
export default products;