import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";

const adminMenu = [
  { id: 1, label: "Sellers", href: "/dashboard/admin/allsellers" },
  { id: 2, label: "Buyers", href: "/dashboard/admin/allbuyers" },
  { id: 3, label: "Reported Items", href: "/dashboard/admin/reporteditems" },
];

const sellerMenu = [
  { id: 1, label: "My Products", href: "/dashboard/seller/myproducts" },
  { id: 2, label: "Add Product", href: "/dashboard/seller/addproduct" },
];

const buyerMenu = [
  { id: 1, label: "My Orders", href: "/dashboard/buyer/myorders" },
];

export default function ProfileBar() {
  const { user, userRole, logoutUser, loading, setLoading } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setLoading(false);
        toast.success('Logout Successful');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      })
  };

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-slate-100">
      <div className="px-4 py-6">
        <span
          className="grid h-10 w-32 font-semibold place-content-center rounded-lg bg-gray-300 text-xs text-slate-900"
        >
          {userRole === "admin" ? "Admin" : userRole === "seller" ? "Seller" : "Buyer"}
        </span>
        <ul className="mt-6 space-y-1 mb-8">
          {
            userRole === "admin" && (
              adminMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))
            )
          }
          {
            userRole === "seller" && (
              sellerMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))
            )
          }
          {
            userRole === "buyer" && (
              buyerMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))
            )
          }
        </ul>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Link to="/" className="bg-gray-300 px-10 py-2 rounded-lg font-medium text-sm">Back to Home</Link>
        <button onClick={handleLogout} className="bg-gray-300 px-10 py-2 rounded-lg whitespace-nowrap font-medium text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <Link to="/" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user?.displayName}</strong>

              <span> {user?.email} </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}