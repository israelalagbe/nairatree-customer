interface Category {
    _id: string;
    alias: string;
    image_url: string;
    active: number;
    deleted: boolean;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    subcategories: SubCategory[];
  }
  
  interface SubCategory {
    alias: string;
    is_popular: number;
    active: number;
    image_url?: string;
    category: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  }
  
  interface Brand {
    is_popular: boolean;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  }
