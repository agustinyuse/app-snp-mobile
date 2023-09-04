import CardLIstComponent from "@/components/card/CardLIstComponent";
import React from "react";
import orders from "../../data/Orders";

export default function Orders() {
  return <CardLIstComponent orders={orders} />;
}
