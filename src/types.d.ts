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


interface Product {
  description: string;
  tags: string[];
  images: string[];
  price: number;
  quantity_available: number;
  payment_options: string[];
  included_in_package: string[];
  avg_rating: number;
  no_of_ratings: number;
  features: string[];
  variants: (Variant | Variants2)[];
  product: string;
  name: string;
  type?: string;
  model?: string;
  condition: string;
  date_manufactured: string;
  return_policy: string;
  category: string;
  subcategory: string;
  brand: string;
  alias: string;
  reviews: any[];
  shipment_fees: Shipmentfee[];
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface Shipmentfee {
  fee: number;
  estimated_delivery_day: number;
  _id: string;
  state: State;
}

interface State {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Variants2 {
  quantity: number;
  images: any[];
  Color: string;
  variant_id: number;
}

interface Variant {
  quantity: number;
  images: string[];
  color: string;
  size: string;
  variant_id: number;
}