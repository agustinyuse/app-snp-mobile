"use client";
import React, { useState } from "react";
import { MdArticle } from "react-icons/md";
import {
  FaBox,
  FaClipboardUser,
  FaCity,
  FaMapLocationDot,
  FaAngleRight,
} from "react-icons/fa6";
import {
  Badge,
  Card,
  CardBody,
  Divider,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Order } from "@/app/orders/models";

interface Props {
  order: Order;
}

function CardComponent({ order }: Props) {
  return (
    <Card
      p={2}
      _active={{ background: "gray.100" }}
      _hover={{ background: "gray.100" }}
    >
      <CardBody display={"flex"}>
        <Flex display={"block"}>
          <Flex m={1}>
            <Text>
              <Icon boxSize={6} as={MdArticle}></Icon>
            </Text>
            <Text ml={2} as="b">
              Orden:
            </Text>
            <Link ml={2} color="blue.500" as={NextLink} href={""}>
              #{order.Order}
            </Link>
          </Flex>
          <Divider />
          <Flex m={1}>
            <Text>
              <Icon boxSize={6} as={FaBox}></Icon>
            </Text>
            <Text ml={2} as="b">
              Producto:
            </Text>
            <Text ml={2}>{order.ProductDescription}</Text>
          </Flex>
          <Divider />
          <Flex m={1}>
            <Text>
              <Icon boxSize={6} as={FaClipboardUser}></Icon>
            </Text>
            <Text ml={2} as="b">
              Cliente:
            </Text>
            <Text ml={2}>{order.CustomerName}</Text>
          </Flex>
          <Divider />
          <Flex m={1}>
            <Text>
              <Icon boxSize={6} as={FaCity}></Icon>
            </Text>
            <Text ml={2} as="b">
              Ciudad:
            </Text>
            <Text ml={2}>{order.CityName}</Text>
          </Flex>
          <Divider />
          <Flex m={1}>
            <Text>
              <Icon boxSize={6} as={FaMapLocationDot}></Icon>
            </Text>
            <Text ml={2} as="b">
              Dirección:
            </Text>
            <Text ml={2}>{order.Address}</Text>
          </Flex>
        </Flex>
        <Flex ml={5} alignItems={"center"} justifyContent={"center"}>
          <Text>
            <Icon boxSize={6} as={FaAngleRight} />
          </Text>
        </Flex>
      </CardBody>
      <Flex m={1} justifyContent={"end"}>
        <Badge>Estado</Badge>
      </Flex>
    </Card>
  );
}

export default CardComponent;
