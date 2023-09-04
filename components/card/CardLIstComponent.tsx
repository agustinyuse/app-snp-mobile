"use client";

import React from "react";
import CardComponent from "./CardComponent";
import { Stack } from "@chakra-ui/react";
import SearchComponent from "../search/SearchComponent";

interface Props {
  orders: any[];
}

function CardLIstComponent({ orders }: Props) {
  return (
    <Stack>
      <SearchComponent />
      <Stack spacing={4}>
        {orders?.map((order) => (
          <CardComponent key={order.Order} order={order} />
        ))}
      </Stack>
    </Stack>
  );
}

export default CardLIstComponent;
