import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import EditOrderForm from "../components/EditOrderForm";
import CreateOrderForm from "../components/CreateOrderForm";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ordersData } from "../data/orders";
import { useEntityEditing } from "../hooks/useEntityEditting";
import { useEntityDeletion } from "../hooks/useEntityDeletion";
import { showToast } from "../utitlities/utilityStyle";
import { useModal } from "../hooks/useModal";

const OrdersPage = () => {
  const headers = [
    "id",
    "productName",
    "quantity",
    "pricePerUnit",
    "totalPrice",
    "status",
    "customerName",
    "orderDate",
  ];
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [...ordersData];
  });
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { isModalOpen, modalType, openModal, closeModal } = useModal();
  const { updateEntity: updateOrder } = useEntityEditing({
    setEntities: setOrders,
    entityType: "orders",
  });
  const { removeEntity: deleteOrder } = useEntityDeletion({
    setEntities: setOrders,
    entityType: "orders",
  });
  const handleEdit = (order) => {
    setSelectedOrder(order);
    openModal("edit");
  };
  const handleDelete = (id) => {
    deleteOrder(id);
    showToast("Order deleted Successfully!", "success");
  };
  const handleSave = (selectedOrder, order) => {
    if (modalType === "edit" && selectedOrder) {
      updateOrder(selectedOrder?.id, order);
      showToast("Order updated successfully!", "success");
    } else {
      setOrders((prevOrders) => [
        ...prevOrders,
        { id: `ORD0 ${prevOrders?.length + 1}`, ...order },
      ]);
      showToast("Order created successfully!", "success");
    }
    closeModal();
  };
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  return (
    <div>
      <div className="flex justify-around items-center">
        <h2 className="text-2xl font-bold text-gray-600">Orders</h2>
        <button
          onClick={() => openModal("create")}
          className="flex gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg my-4"
        >
          <PlusCircleIcon className="h-6 w-6" /> <span>Create New Order</span>
        </button>
      </div>
      <Table
        headers={headers}
        data={orders}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={modalType === "edit" ? "Edit Order" : "Create New Order"}
      >
        {modalType === "edit" ? (
          <EditOrderForm order={selectedOrder} onSave={handleSave} />
        ) : (
          <CreateOrderForm onSave={handleSave} />
        )}
      </Modal>
    </div>
  );
};

export default OrdersPage;
