"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";

export async function addCategory(formData: FormData) {
  const categoryName = formData.get("categoryName") as string
  if (!categoryName) {
    return { success: false, error: "Category Name Required" }
  }
  const doesCategoryExist = await db.category.findFirst({
    where: {
      name: categoryName
    }
  })
  if (doesCategoryExist) {
    return { success: false, error: "Category With Same Name Already Exist" }
  }
  const createdCategory = await db.category.create({
    data: {
      name: categoryName
    }
  })
  if (!createdCategory) {
    return { success: false, error: "Something Went Wrong , Please Try Again" }
  }
  revalidatePath("/admin/dashboard/categories")
  return { success: true, message: "Category Has Been Created" }
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