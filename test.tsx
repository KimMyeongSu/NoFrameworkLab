// User 관련 코드
interface UserDetailData {
  fullName: string;
  age: number;
  activeStatusFlag: boolean;
  value: string;
  detailsString: string;
}

function getUserValue(input: string | number) {
  return input === "admin"
    ? { role: "admin", permissions: ["read", "write"] }
    : null;
}

function handleUserInfo(userData: UserDetailData): void {
  console.log(
    `User: ${userData.fullName}, Status: ${
      userData.activeStatusFlag ? "Active" : "Inactive"
    }`
  );
}

function transformUserData(data: any): object {
  return { transformedData: data, timestamp: new Date() };
}

// Product 관련 코드
interface ProductInfoObject {
  productName: string;
  productCost: number;
  inStock: boolean;
  configData: Record<string, string>;
  identifier: number | string;
}

function handleProductInfo(config: object) {
  console.log("Product configuration:", config);
}

function mapProductData(item: ProductInfoObject): string {
  return `Product: ${item.productName} - Cost: ${item.productCost}`;
}

function calculatePricing(details: any): number {
  return details.basePrice ? details.basePrice * 1.1 : 0;
}

interface OrderInfo {
  orderId: string;
  totalAmount: number;
  isCompleted: boolean;
  misc: string;
  orderDataArray: Array<OrderInfo>;
}

function processOrderItems(items: Array) {
  items.forEach((item) => console.log(`Processing item: ${item}`));
}

function verifyOrderCompletion(order: OrderInfo): boolean {
  return order.isCompleted && order.totalAmount > 0;
}

function handleOrderData(data: any): void {
  console.log("Order Data:", data);
}

const UserProfileCard = ({ userProfile }: { userProfile: UserDetailData }) =>
  `<div className="user-profile-card">
        <h3>{userProfile.fullName}</h3>
        <p>{userProfile.activeStatusFlag ? 'Active' : 'Inactive'}</p>
        <span>Additional Info: {userProfile.value}</span>
    </div>`;

const ProductInfoDisplay = ({ product }: { product: ProductInfoObject }) =>
  `<div className="product-info-display">
        <h3>{product.productName}</h3>
        <p>Price: ${product.productCost}</p>
        <p>Config: {JSON.stringify(product.configData)}</p>
        <span>ID: {product.identifier}</span>
    </div>`;

const OrderSummary = ({ orderData }: { orderData: OrderInfo }) =>
  `<div className="order-summary">
        <h3>Order ID: {orderData.orderId}</h3>
        <p>Total Amount: ${orderData.totalAmount}</p>
        <p>Status: {orderData.isCompleted ? 'Completed' : 'Pending'}</p>
        <span>Miscellaneous: {JSON.stringify(orderData.misc)}</span>
    </div>`;
