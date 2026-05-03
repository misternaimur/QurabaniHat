/** @format */

import React from "react";

const content = `
<!-- TopNavBar Shell -->

<!-- Hero Section -->
<header class="relative overflow-hidden bg-gradient-to-b from-primary-container to-primary py-24 md:py-32">
<div class="absolute inset-0 islamic-pattern bg-emerald-100"></div>
<div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
<div class="w-full md:w-1/2 space-y-8">
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/20 text-secondary-fixed border border-secondary-container/30 backdrop-blur-sm">
<span class="material-symbols-outlined text-sm" data-icon="verified_user">verified_user</span>
<span class="font-label-caps text-[10px] uppercase tracking-widest">Shariah Compliant Marketplace</span>
</div>
<h1 class="font-h1 text-h1 text-white leading-[1.1]">Find Your <span class="text-secondary-fixed">Perfect</span> Qurbani Animal</h1>
<p class="font-body-lg text-body-lg text-emerald-100/80 max-w-lg">Trusted livestock booking for your sacred tradition. We bridge the gap between traditional farms and modern families with verified health checks and seamless logistics.</p>
<div class="flex flex-wrap gap-4 pt-4">
<button class="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-xl font-h3 text-[18px] shadow-xl shadow-black/20 hover:scale-105 transition-transform">Browse Animals</button>
<button class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-h3 text-[18px] hover:bg-white/20 transition-all">Learn More</button>
</div>
</div>
<div class="w-full md:w-1/2 relative">
<div class="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
<img class="w-full h-full object-cover" data-alt="A lush, high-end agricultural setting in rural Bangladesh featuring healthy, well-groomed Sahiwal cows and goats grazing under soft golden hour sunlight. The environment is serene and modern, with professional farm fencing and verdant fields. The cinematic lighting emphasizes the animals' sleek coats and vital health, conveying a premium and trustworthy livestock farm aesthetic consistent with the brand's luxury identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmWQYONGyCQ1MwHlgfWCzzLcSRrMUyF3NPIZikCjEI9xlFESWyIsstfIsy7b-u-72rSOadACQ_y-GSKYTlQR0xBn9WLYAORorOS7QvsLKW3P5kUVVb96mhW_4GUbRT70nInvjvgBbvbrwNj4MEBCS61KHQFrgtIIYqLejqm2HJGgq_LRJViFPyo5LLptNXmSXzRbxfbYK-cdjkI7Pgj6iZJoZla99fDn0q6n2RdrvlqR5LYwgLJXsnxXqtAEB0IBB7PuWMjdTN2SWO"/>
</div>
<!-- Floating Decorative Element -->
<div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-50 hidden md:block">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined" data-icon="star">star</span>
</div>
<div>
<p class="font-h3 text-[16px] text-primary">Certified Farms Only</p>
<p class="text-body-sm text-outline">100% Health Guarantee</p>
</div>
</div>
</div>
</div>
</div>
</header>
<!-- Stats Section -->
<section class="py-16 bg-white border-y border-surface-container">
<div class="max-w-7xl mx-auto px-6 md:px-12">
<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
<div class="text-center space-y-2">
<p class="text-h2 font-h2 text-primary">500+</p>
<p class="text-label-caps text-outline uppercase">Happy Buyers</p>
</div>
<div class="text-center space-y-2">
<p class="text-h2 font-h2 text-primary">200+</p>
<p class="text-label-caps text-outline uppercase">Trusted Sellers</p>
</div>
<div class="text-center space-y-2">
<p class="text-h2 font-h2 text-primary">1000+</p>
<p class="text-label-caps text-outline uppercase">Animals Sold</p>
</div>
<div class="text-center space-y-2">
<p class="text-h2 font-h2 text-primary">Secure</p>
<p class="text-label-caps text-outline uppercase">Booking</p>
</div>
</div>
</div>
</section>
<!-- Top Breeds Section -->
<section class="py-24 bg-surface-container-lowest">
<div class="max-w-7xl mx-auto px-6 md:px-12">
<div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div class="space-y-2">
<h2 class="text-h2 font-h2 text-primary">Premium Breeds</h2>
<p class="text-body-lg text-outline">The finest livestock curated for your sacred sacrifice.</p>
</div>
<a class="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#">
                    Explore All Breeds <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div class="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
<!-- Breed Card 1 -->
<div class="flex-none w-72 group cursor-pointer">
<div class="aspect-[4/5] rounded-2xl overflow-hidden relative mb-4">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A portrait of a majestic Deshi Cow in a clean, high-end agricultural environment. The cow's coat is pristine and glossy, set against a background of soft green pastures and professional fencing. The image uses soft, natural lighting to highlight the animal's noble posture and vitality, creating a sophisticated editorial look that reinforces trust and quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8zOh5IQPedW31TS6lJep5jHE_vAro68e7C1xSZGPPMP0B_D9khSpzLwwz-4LysvqZDx1SVF06-qKzKZMQktKnfVa7KYFlXconHcCGCxxs7Csnw_Puk0yPWQAVjwL6vM4OmBtiB6_c9Cx8XL1xP4vre3EzH8U-RBJc0KLi4sXInsCG1Q2ZTXA7UO0WG3pB2nY5ZIbVmCXT4GX0EvgV2Hbz0wzrtsc4hFiEYpzuCx3Rr7Y5JwqJWBlXoMLAoC6JiQnDgbkNwBapDJmZ"/>
<div class="absolute top-4 left-4 bg-primary-container text-white text-[10px] font-label-caps px-3 py-1 rounded-full uppercase tracking-tighter">Starting ৳90k</div>
</div>
<h3 class="font-h3 text-[20px] text-primary">Deshi Cow</h3>
<p class="text-body-sm text-outline">Traditional &amp; Hearty</p>
</div>
<!-- Breed Card 2 -->
<div class="flex-none w-72 group cursor-pointer">
<div class="aspect-[4/5] rounded-2xl overflow-hidden relative mb-4">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Close-up of a powerful Sahiwal cow with its distinct hump and beautiful red coat. The animal is standing in a premium barn setting with clean bedding and bright, natural light streaming through. The shot is high-key and professional, focusing on the breed's impressive physical characteristics and high-health status." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfhb8P03-iuOSxR1JNaH1tzyRYUIZr82q8t8wdUo0AiUgl79cIOw6RE8yQNEpD1qf15KkzB7GdjB7LPiA8qV_GHX8MBiFwvM-FpYD9Bzcb8mxdXisM9fMI4lwVdWDir0tdYeaQWAvA6VP9n7yLIJoSNRm2pb897TsdJBi2e7LRZJx-cTpcyc_kezEt_X97ciNrLUhzg5tMmmLO-SxhG3gYBmW-FJT5C6iZYlP5YgkPunYD7dg12L-7bd1H9bl8CX_299Fp0nCtaXFZ"/>
<div class="absolute top-4 left-4 bg-primary-container text-white text-[10px] font-label-caps px-3 py-1 rounded-full uppercase tracking-tighter">Starting ৳150k</div>
</div>
<h3 class="font-h3 text-[20px] text-primary">Sahiwal</h3>
<p class="text-body-sm text-outline">Elite Milk &amp; Meat</p>
</div>
<!-- Breed Card 3 -->
<div class="flex-none w-72 group cursor-pointer">
<div class="aspect-[4/5] rounded-2xl overflow-hidden relative mb-4">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A massive Brahman bull standing in a wide field under a clear blue sky. The animal's gray coat reflects the sunlight, showcasing its muscle definition and grandeur. The composition is expansive and cinematic, highlighting the scale of the animal within a professional farm setting that promises premium quality and care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOUnHWG7kKkFSYUyJ0ib41V8hD6hwzgRmTSdc1vevaroduCkntVPadwCEAK9OmwTs_i8x8FdX7rvFXhcvD_q4SpDj3Whw1m5u6vjq07jKbOMyGsTV8ERJKA7h6qfy7B-X9GBbRr7pdLx-b8nkeTU3Dvq0xYhaA7J9s9M_Sc-ry7KQJBkHOlLeLtpz97r7dVjuplybQ09jlOYWaWhAWPiMYWa2i97XsHZtLXZZD7X1UQbUjdGtKIOP08eMs4LlzVxJD5p1_Y_JWMGF0"/>
<div class="absolute top-4 left-4 bg-primary-container text-white text-[10px] font-label-caps px-3 py-1 rounded-full uppercase tracking-tighter">Starting ৳300k</div>
</div>
<h3 class="font-h3 text-[20px] text-primary">Brahman</h3>
<p class="text-body-sm text-outline">Massive &amp; Prestigious</p>
</div>
<!-- Breed Card 4 -->
<div class="flex-none w-72 group cursor-pointer">
<div class="aspect-[4/5] rounded-2xl overflow-hidden relative mb-4">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A Black Bengal goat with a shiny, jet-black coat standing on a small wooden platform in a modern livestock enclosure. The lighting is crisp and detailed, showing the texture of the animal's fur and its alert, healthy expression. The setting is minimalist and high-end, focusing entirely on the purity and health of the animal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC5RsaTSjFe2rxAdrxAYqcoh60yvpb2foVVqVqDv6IxHY7Kt0B_x96LxNSaQZl1Wmmi6y1zt_zulvHci1yHju_pKJM_cLUlH6DnM2ct1k2OACmXhlv4fLoK2mX71ogxJWaUyhU-S38bblWteqeFO9FMNI0YGRGybovIiwnb-ZE0-6UjbY8C-fSximKR8XquyGZ7sNRpO7t6GhDKMFkrrDLlve2PFxNaxU16v3wEZ5QhfDSp2jCYOBPTAj6_0El3zGNYByRj2d6RoGw"/>
<div class="absolute top-4 left-4 bg-primary-container text-white text-[10px] font-label-caps px-3 py-1 rounded-full uppercase tracking-tighter">Starting ৳25k</div>
</div>
<h3 class="font-h3 text-[20px] text-primary">Black Bengal Goat</h3>
<p class="text-body-sm text-outline">Superior Meat Quality</p>
</div>
</div>
</div>
</section>
<!-- Featured Animals Section -->
<section class="py-24 bg-surface px-6 md:px-12">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-16 space-y-4">
<h2 class="text-h2 font-h2 text-primary">Featured Selection</h2>
<p class="text-body-lg text-outline max-w-2xl mx-auto">Hand-picked livestock from our most trusted partner farms across Bangladesh.</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<!-- Card 1 -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
<div class="relative h-64">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A healthy, well-fed Sahiwal bull standing in a clean barn with soft sunlight filtering in. The bull's reddish-brown coat is glossy, and it has clear, bright eyes indicating excellent health. The farm setting is organized and professional, reflecting high-end agricultural standards. Soft shadows and high-key lighting create a warm, trustworthy atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBuqNKk9b80qo8xeJmSepZGpjNhMgLUFCWpc6Eh27ap8C9bBoVM4pGR4AB0syvaEWABkq6-OkRWAlItXUJnvw7B2jhVjlUFS_yOABpIWnaRtQL_U18pvIPcwSVp7ozDzavFcsddHCmFNv3oiOTS6bWipJ_87Qg6RTWVlTNFtApb9Q9EjfRXRw7iDJIFgZdtIWFcmxsnWHQ1F1UQt1LCdKSc7vjVvrtuiu9bTwY3woVD-IxNR0BGALEntPDDzPZVVVopzoCiCJtMxjE"/>
<span class="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
<span class="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill">verified</span>
                            CERTIFIED
                        </span>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="font-h3 text-[18px] text-primary leading-tight">Shundar Sahiwal</h4>
<p class="text-body-sm text-outline">Premium Sahiwal Breed</p>
</div>
<p class="text-h3 font-h2 text-secondary">৳1,20,000</p>
</div>
<div class="flex items-center gap-4 py-2 border-y border-surface-container-low text-body-sm text-outline">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="weight">weight</span>
                                320kg
                            </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                                Pabna
                            </div>
</div>
<button class="w-full py-3 bg-primary-container text-on-primary rounded-xl font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                            View Details
                        </button>
</div>
</div>
<!-- Card 2 -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
<div class="relative h-64">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A sturdy Deshi bull with an impressive frame and healthy weight. The bull is in a premium open-air field with lush green grass and professional livestock fencing. The natural daylight is bright and soft, highlighting the animal's natural vitality and prime condition. The aesthetic is clean and high-end modern agricultural." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZYTBLMAK4swLl76w6CSuC7A5VAtV17BjzupohHR5UFqDiyrsOcVSNHLm_BtE1pgqizgS8VY16SgS-MPn__9Qb8Dq5HmPruMhrWC3D3NNp7oXGyAaZKmuhO4SIrQpIrxc3lRwi1ovKKkYN3giQoaSNpnAsBoLL9q0XlS9-s9sxm0qoXsMamOVUxvJ1J_NKRuaXEX1f9W7Z4k3YKDbWXDXWB3HNTnpWCX6pJGt_aFLw7AFBXHqV2TXEhLjkpFxkrQIqqKkcASDFTDMt"/>
<span class="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
<span class="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill">verified</span>
                            CERTIFIED
                        </span>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="font-h3 text-[18px] text-primary leading-tight">Royal Brahman</h4>
<p class="text-body-sm text-outline">Authentic Brahman</p>
</div>
<p class="text-h3 font-h2 text-secondary">৳4,50,000</p>
</div>
<div class="flex items-center gap-4 py-2 border-y border-surface-container-low text-body-sm text-outline">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="weight">weight</span>
                                650kg
                            </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                                Manikganj
                            </div>
</div>
<button class="w-full py-3 bg-primary-container text-on-primary rounded-xl font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                            View Details
                        </button>
</div>
</div>
<!-- Card 3 -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
<div class="relative h-64">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A heavy-weight Deshi bull standing prominently in a gallery-like farm environment. The animal's hide is clean, showing meticulous care. The surrounding space is airy and modern, with a focus on hygiene and animal welfare. The cinematic lighting creates depth and professional appeal, consistent with a high-end livestock marketplace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqBGATUN9h7_Xp9Gl2UgW7sC397xE-fjZbPXtb9VaODSjv-ETe5PetM1mal90sHHDt-3DW9cem8Re6kRPY8lBFC1xM1EvICdjwyotBkX1AZPeOSR_1oPr1eLYvjFXUsKEBddMBJo7RAX7gt_H4rNbzYf9fBcq4MWlCcTBT-fWxTAyT58UXISva3cPD6sXvsVplV2X894W-ZwLld2oKNPq2zzjBsitKsQmQ7_gbNljv3l1zQUf3b704mIverz7YjtWO3ucFs9jjhEXo"/>
<span class="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
<span class="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill">verified</span>
                            CERTIFIED
                        </span>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="font-h3 text-[18px] text-primary leading-tight">Dhaka Giant</h4>
<p class="text-body-sm text-outline">Mixed Breed</p>
</div>
<p class="text-h3 font-h2 text-secondary">৳2,10,000</p>
</div>
<div class="flex items-center gap-4 py-2 border-y border-surface-container-low text-body-sm text-outline">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="weight">weight</span>
                                480kg
                            </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                                Gazipur
                            </div>
</div>
<button class="w-full py-3 bg-primary-container text-on-primary rounded-xl font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                            View Details
                        </button>
</div>
</div>
<!-- Card 4 -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
<div class="relative h-64">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A beautiful, large Black Bengal goat with shiny fur and alert, clear eyes. It is shown in a modern farm stall that is clean and well-lit. The image highlights the goat's prime health and superior breed characteristics. The lighting is soft and professional, emphasizing the brand's commitment to high-end agricultural quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_S4n_zZ37Vs6rQGV-RoDMtx4nFnmpPgUeHM1wbxYXc7E3ZpXC_TBPeZjh1IdBBQMTB2EkNCL5v5BjC8JZYfO75gAIgBAhezDxfaqC9WNQT8Y1mBjJbvE2-4PzpF1gggJE_aWnnIAeTSQq9xd90lO21WpLEcrQNJOqE8bRPTvYlirj8TI_2QEijCWFEw6als9ZbNk51CnGBCxTrRBYHDxE-JcJYIR2KGdRRd5T-zSwpVhIAK6FjhwxNIOZP2Uv328K4LbQ0ZUsiC5L"/>
<span class="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
<span class="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill">verified</span>
                            CERTIFIED
                        </span>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="font-h3 text-[18px] text-primary leading-tight">Kalo Manik</h4>
<p class="text-body-sm text-outline">Pure Black Bengal</p>
</div>
<p class="text-h3 font-h2 text-secondary">৳42,000</p>
</div>
<div class="flex items-center gap-4 py-2 border-y border-surface-container-low text-body-sm text-outline">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="weight">weight</span>
                                35kg
                            </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                                Kushtia
                            </div>
</div>
<button class="w-full py-3 bg-primary-container text-on-primary rounded-xl font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                            View Details
                        </button>
</div>
</div>
</div>
</div>
</section>
<!-- Qurbani Tips Section -->
<section class="py-24 bg-primary-container relative overflow-hidden">
<div class="absolute inset-0 islamic-pattern bg-white/5"></div>
<div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div class="text-center mb-16">
<h2 class="text-h2 font-h2 text-white">Qurbani Preparation</h2>
<p class="text-body-lg text-on-primary-container max-w-2xl mx-auto">Essential Islamic guidelines and expert tips for selecting your animal.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Tip Card 1 -->
<div class="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] space-y-4">
<div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined text-3xl" data-icon="fact_check">fact_check</span>
</div>
<h4 class="text-h3 font-h2 text-white">Age Verification</h4>
<p class="text-body-md text-emerald-100/70">Ensure the animal has reached the prescribed age (2 years for cattle, 1 year for goats) as per Islamic law.</p>
</div>
<!-- Tip Card 2 -->
<div class="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] space-y-4">
<div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined text-3xl" data-icon="health_and_safety">health_and_safety</span>
</div>
<h4 class="text-h3 font-h2 text-white">Physical Health</h4>
<p class="text-body-md text-emerald-100/70">Look for clear eyes, moist nose, and a healthy coat. The animal must be free from any major physical defects.</p>
</div>
<!-- Tip Card 3 -->
<div class="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] space-y-4">
<div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined text-3xl" data-icon="history_edu">history_edu</span>
</div>
<h4 class="text-h3 font-h2 text-white">Shariah Guidelines</h4>
<p class="text-body-md text-emerald-100/70">Understand the rules for sharing (up to 7 for cattle, 1 for goat) and the proper method of sacrifice.</p>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-emerald-950 dark:bg-black text-emerald-50 full-width mt-auto border-t border-emerald-900 dark:border-zinc-900">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 py-16 w-full max-w-7xl mx-auto">
<!-- Brand Section -->
<div class="space-y-6">
<div class="text-xl font-bold text-yellow-500">QurbaniHat</div>
<p class="text-emerald-200/60 text-sm max-w-xs leading-relaxed">Connecting sacred traditions with premium modern service. Find, book, and deliver your Qurbani animal with complete peace of mind.</p>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-yellow-500 hover:text-on-secondary-fixed transition-all" href="#">
<span class="material-symbols-outlined text-[20px]" data-icon="public">public</span>
</a>
<a class="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-yellow-500 hover:text-on-secondary-fixed transition-all" href="#">
<span class="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
</a>
<a class="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-yellow-500 hover:text-on-secondary-fixed transition-all" href="#">
<span class="material-symbols-outlined text-[20px]" data-icon="chat_bubble">chat_bubble</span>
</a>
</div>
</div>
<!-- Links Column 1 -->
<div class="space-y-6">
<h5 class="text-white font-bold text-sm tracking-widest uppercase">Quick Links</h5>
<ul class="space-y-3">
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">About Us</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Contact</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">FAQs</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Shipping</a></li>
</ul>
</div>
<!-- Links Column 2 -->
<div class="space-y-6">
<h5 class="text-white font-bold text-sm tracking-widest uppercase">Categories</h5>
<ul class="space-y-3">
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Cows</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Goats</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Camel</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Premium Breeds</a></li>
</ul>
</div>
<!-- Newsletter -->
<div class="space-y-6">
<h5 class="text-white font-bold text-sm tracking-widest uppercase">Legal</h5>
<ul class="space-y-3">
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Terms of Service</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Privacy Policy</a></li>
<li><a class="text-emerald-200/60 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block" href="#">Seller Terms</a></li>
</ul>
</div>
</div>
<div class="border-t border-emerald-900/50 py-8 px-6 md:px-12 text-center text-xs text-emerald-200/40">
            © 2024 QurbaniHat. All rights reserved. Sacred tradition, premium service.
        </div>
</footer>
<!-- FAB for Support (Contextual for Home) -->
<button class="fixed bottom-8 right-8 bg-secondary-container text-on-secondary-container w-14 h-14 rounded-full shadow-2xl flex items-center justify-center glass-morphism hover:scale-110 active:scale-95 transition-all z-40 border border-white/20">
<span class="material-symbols-outlined text-3xl" data-icon="support_agent">support_agent</span>
</button>
`;

export default function Home() {
  return (
    <div className="bg-zinc-50">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
