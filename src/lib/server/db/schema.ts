import { pgTable, text, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const product = pgTable('product', {
	id: text('id')
		.notNull()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	image: text('image')
});

export interface Product {
	id: string;
	name: string;
	image: string | null;
}

export const productRelations = relations(product, ({ many }) => ({
	productCategories: many(productCategory),
	productVariants: many(productVariant)
}));

export const productVariant = pgTable('product_variant', {
	id: text('id')
		.notNull()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	productId: text('product_id')
		.notNull()
		.references(() => product.id),
	name: text('name').notNull(),
	price: integer('price').notNull(),
	image: text('image')
});

export interface ProductVariant {
	id: string;
	productId: string;
	name: string;
	price: number;
	image: string | null;
}

export const productVariantRelations = relations(productVariant, ({ one }) => ({
	product: one(product, {
		fields: [productVariant.productId],
		references: [product.id]
	})
}));

export const category = pgTable('category', {
	id: text('id')
		.notNull()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	image: text('image')
});

export interface Category {
	id: string;
	name: string;
	image: string | null;
}

export const categoryRelations = relations(category, ({ many }) => ({
	productCategories: many(productCategory)
}));

export const productCategory = pgTable('product_category', {
	id: text('id')
		.notNull()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	productId: text('product_id')
		.notNull()
		.references(() => product.id),
	categoryId: text('category_id')
		.notNull()
		.references(() => category.id)
});

export interface ProductCategory {
	id: string;
	productId: string;
	categoryId: string;
}

export const productCategoryRelations = relations(productCategory, ({ one }) => ({
	product: one(product, {
		fields: [productCategory.productId],
		references: [product.id]
	}),
	category: one(category, {
		fields: [productCategory.categoryId],
		references: [category.id]
	})
}));
