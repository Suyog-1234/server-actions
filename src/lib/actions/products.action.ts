"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";

export async function addProduct(formData: FormData) {
  const category = formData.get("category") as string
  const productName = formData.get("productName") as string
  const productPrice = formData.get("productPrice") as string
  console.log(category,productName,productPrice)
  if (!category || !productName || !productPrice) {
    return { success: false, error: "All Filds Required" }
  }
  const doesProductExist = await db.product.findFirst({
    where: {
      name:productName
    }
  })
  if (doesProductExist) {
    return { success: false, error: "Product With Same Name Already Exist" }
  }
  const createdProduct = await db.product.create({
    data: {
      name: productName,
      price:Number(productPrice),
      categoryId:category
    }
  })
  if (!createdProduct) {
    return { success: false, error: "Something Went Wrong , Please Try Again" }
  }
  revalidatePath("/admin/dashboard/categories")
  return { success: true, message: "Product Has Been Created" }
}

export async function deleteCategory(categoryId: string) {
  if (!categoryId) {
    return { success: false, error: "CategoryId Required" }
  }
  const deletedCategory = await db.category.delete({
    where: {
      id: categoryId
    }
  })
  if (!deletedCategory) {
    return { success: false, error: "Something Went Wrong , Please Try Again" }
  }
  revalidatePath("/admin/dashboard/categories")
  return { success: true, message: "Category Has Been Deleted" }
}

export async function getCategories(){
    const categories = await db.category.findMany();
    return categories
}