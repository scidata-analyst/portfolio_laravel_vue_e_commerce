<template>
    <div class="bg-white">
        <Header />

        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-10 sm:py-5 lg:py-15">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                                class="absolute inset-0" aria-hidden="true" />Read more <span
                                aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div class="text-center">
                    <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Data to
                        enrich your online business</h1>
                    <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna aliqua
                        ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                        occaecat.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#"
                            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                            started</a>
                        <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span
                                aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </div>

    <div class="bg-gray-300">
        <div class="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-2 sm:py-2 lg:max-w-none lg:py-6">
                <h2 class="text-4xl font-bold text-gray-900">Category</h2>

                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:space-y-0 lg:gap-x-6">
                    <div v-for="callout in callouts" :key="callout.name" class="group relative">
                        <img :src="callout.imageSrc" :alt="callout.imageAlt"
                            class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
                        <h3 class="mt-6 text-sm text-gray-500">
                            <a :href="callout.href">
                                <span class="absolute inset-0" />
                                {{ callout.name }}
                            </a>
                        </h3>
                        <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white">
        <div class="max-w-[1920px] px-4 py-6 mx-auto">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">T Shirt</h2>

            <div class="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product.id" class="group relative">
                    <img :src="'http://127.0.0.1:8000/'+product.image" :alt="product.imageAlt"
                        class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />

                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700">
                                <a :href="product.href">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ product.name }}
                                </a>
                            </h3>
                        </div>
                        <p class="text-5xl font-bold text-gray-900">{{ product.price }}</p>
                    </div>

                    <div
                        class="w-full text-center text-xl font-medium text-white bg-blue-900 border border-gray-300 px-4 py-2 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
                        Quick View
                    </div>

                    <div class="mt-4 flex">
                        <div
                            class="w-full text-center text-xl font-medium text-gray-900 border border-gray-300 px-4 py-2 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
                            Add to Bag
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TransitionRoot as="template" :show="open">
        <Dialog class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 hidden bg-gray-500/75 transition-opacity md:block" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 md:scale-100"
                        leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                        <DialogPanel
                            class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                            <div
                                class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button type="button"
                                    class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                    @click="open = false">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="size-6" aria-hidden="true" />
                                </button>

                                <div
                                    class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                    <img :src="product.imageSrc" :alt="product.imageAlt"
                                        class="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5" />
                                    <div class="sm:col-span-8 lg:col-span-7">
                                        <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{{ product.name }}</h2>

                                        <section aria-labelledby="information-heading" class="mt-2">
                                            <h3 id="information-heading" class="sr-only">Product information</h3>

                                            <p class="text-2xl text-gray-900">{{ product.price }}</p>

                                            <!-- Reviews -->
                                            <div class="mt-6">
                                                <h4 class="sr-only">Reviews</h4>
                                                <div class="flex items-center">
                                                    <div class="flex items-center">
                                                        <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                                            :class="[product.rating > rating ? 'text-gray-900' : 'text-gray-200', 'size-5 shrink-0']"
                                                            aria-hidden="true" />
                                                    </div>
                                                    <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                                                    <a href="#"
                                                        class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
                                                        product.reviewCount }} reviews</a>
                                                </div>
                                            </div>
                                        </section>

                                        <section aria-labelledby="options-heading" class="mt-10">
                                            <h3 id="options-heading" class="sr-only">Product options</h3>

                                            <form>
                                                <!-- Colors -->
                                                <fieldset aria-label="Choose a color">
                                                    <legend class="text-sm font-medium text-gray-900">Color</legend>

                                                    <div class="mt-4 flex items-center gap-x-3">
                                                        <div v-for="color in product.colors" :key="color.id"
                                                            class="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                            <input :aria-label="color.name" type="radio" name="color"
                                                                :value="color.id" :checked="color === product.colors[0]"
                                                                :class="[color.classes, 'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3']" />
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <!-- Sizes -->
                                                <fieldset class="mt-10" aria-label="Choose a size">
                                                    <div class="flex items-center justify-between">
                                                        <div class="text-sm font-medium text-gray-900">Size</div>
                                                        <a href="#"
                                                            class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size
                                                            guide</a>
                                                    </div>

                                                    <div class="mt-2 grid grid-cols-4 gap-3">
                                                        <label v-for="size in product.sizes" :key="size.id"
                                                            :aria-label="size.name"
                                                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25">
                                                            <input type="radio" name="size" :value="size.id"
                                                                :checked="size === product.sizes[2]"
                                                                :disabled="!size.inStock"
                                                                class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed" />
                                                            <span
                                                                class="text-sm font-medium uppercase group-has-checked:text-white">{{
                                                                size.name }}</span>
                                                        </label>
                                                    </div>
                                                </fieldset>

                                                <button type="submit"
                                                    class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Add
                                                    to bag</button>
                                            </form>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <Footer />
</template>

<script setup>
import axios from 'axios'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
        { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
        { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
    ],
}

const open = ref(true)

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

// const products = [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     {
//         id: 2,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
//         imageAlt: "Front of men's Basic Tee in white.",
//         price: '$35',
//         color: 'Aspen White',
//     },
//     {
//         id: 3,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
//         imageAlt: "Front of men's Basic Tee in dark gray.",
//         price: '$35',
//         color: 'Charcoal',
//     },
//     {
//         id: 4,
//         name: 'Artwork Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
//         imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
//         price: '$35',
//         color: 'Iso Dots',
//     },
//     {
//         id: 5,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
//     {
//         id: 6,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
//         imageAlt: "Front of men's Basic Tee in white.",
//         price: '$35',
//         color: 'Aspen White',
//     },
//     {
//         id: 7,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
//         imageAlt: "Front of men's Basic Tee in dark gray.",
//         price: '$35',
//         color: 'Charcoal',
//     },
//     {
//         id: 8,
//         name: 'Artwork Tee',
//         href: '#',
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
//         imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
//         price: '$35',
//         color: 'Iso Dots',
//     }
// ]
var products

const callouts = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/products')
        .then(response => {
            console.log(response.data);
            products = response.data;
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            console.log('Finally operation done');
        })
})

const mobileMenuOpen = ref(false)
</script>