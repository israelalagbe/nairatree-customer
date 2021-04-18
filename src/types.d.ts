type UseStore<T> = import('zustand').UseStore<T>;
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
  variants: ProductVariant[];
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
  related_items?: Product[],
  deal?: {
    new_price: string,
    until: string
  }
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



interface ProductVariant {
  quantity: number;
  images: string[];
  color: string;
  size: string;
  variant_id: number;
}

interface Registeration {
  role: string,
  first_name: string,
  surname: string,
  email: string,
  phone: string,
  password: password,
  address_book: [],
  createdAt: string,
  updatedAt: string,
  id: string
}

interface Login {
  email: string,
  password: string
}

interface ForgotPassword {
  email: string
}

interface OTP {
  code: string
}

interface ResetPassword {
  id: string,
  password: string
}



interface User {
  active:       number;
  role:         string;
  first_name:   string;
  surname:      string;
  email:        string;
  phone:        string;
  createdAt:    Date;
  updatedAt:    Date;
  address_book: AddressBook[];
  id:           string;
}

interface AddressBook {
  country:         string;
  is_default:      boolean;
  _id:             string;
  label:           string;
  name:            string;
  phone:           string;
  alternate_phone: string;
  address:         string;
  region:          string;
  city:            string;
  additional_info: string;
}

interface Cart {
  product:  Product;
  quantity: number;
  variant?: string;
}


