<template>
    <div v-if="$store.state.settings" class="font-bold  text-center w-full h-screen fixed top-0 right-0 p-3 rounded-lg flex justify-center items-center flex-wrap" style="overflow:scroll">
    
    <div @click="$store.commit('toggleSetting')" class=" opacity-75 w-full h-screen bg-theme_primary_light absolute top-0 right-0  z-10"></div>
    
    <div class="z-20 w-full bg-theme_primary p-5 shadow-lg rounded-xl neu-out" style="max-width:600px">
         
            <!-- Primary Color Set  -->
               <div class="w-full neu-in p-5 lg:p-10 rounded-xl flex flex-wrap justify-center">
                 <h1 class="mb-8 w-full text-primary font-bold text-xl">
                   Primary Color
                </h1>
                <div class="flex flex-wrap justify-center">
                        <div @click="$store.commit('setPrimaryColor','primary-red')" class=" cursor-pointer border-4 w-12 h-12 primary-red bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-red') ? 'rounded-full bg-primary_dark border-primary' : ''" ></div>
                        <div @click="$store.commit('setPrimaryColor','primary-orange')" class=" cursor-pointer border-4 w-12 h-12 primary-orange bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-orange') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
                        <div @click="$store.commit('setPrimaryColor','primary-yellow')" class=" cursor-pointer border-4 w-12 h-12 primary-yellow bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-yellow') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
                 
                        <div @click="$store.commit('setPrimaryColor','primary-green')" class=" cursor-pointer border-4 w-12 h-12 primary-green bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-green') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
                        <div @click="$store.commit('setPrimaryColor','primary-teal')" class=" cursor-pointer border-4 w-12 h-12 primary-teal bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-teal') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
                        <div @click="$store.commit('setPrimaryColor','primary-blue')" class=" cursor-pointer border-4 w-12 h-12 primary-blue bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-blue') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
             
                        <div @click="$store.commit('setPrimaryColor','primary-indigo')" class=" cursor-pointer border-4 w-12 h-12 primary-indigo bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-indigo') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
                        <div @click="$store.commit('setPrimaryColor','primary-purple')" class=" cursor-pointer border-4 w-12 h-12 primary-purple bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-purple') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
                        <div @click="$store.commit('setPrimaryColor','primary-pink')" class=" cursor-pointer border-4 w-12 h-12 primary-pink bg-primary hover:bg-primary_dark hover:border-primary shadow-lg mb-3 border-theme_primary_light" :class="($store.state.primaryColor == 'primary-pink') ? 'rounded-full bg-primary_dark border-primary' : ''"></div>
                
                </div>
                <h1 class="my-8 w-full text-primary font-bold text-xl">
                    Background Theme
                </h1>
                <!-- Theme Set -->
    
                <div class="px-2 w-full lg:w-1/3">
                    <div  @click="$store.commit('setTheme','theme-light')" class="cursor-pointer theme-light rounded-lg text-yellow-600 flex p-2 px-4 justify-center border-4 w-full border-theme_primary_light mb-2 " :class="($store.state.theme == 'theme-light') ? 'rounded-full border-theme_secondary text-theme_secondary' : ''">
                            <svg class="bi bi-sun mr-2 " width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                                <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
                            </svg> Light
                        </div>
                    </div>
                <div class="px-2 w-full lg:w-1/3">
                    <div  @click="$store.commit('setTheme','theme-dark-blue')" class="cursor-pointer rounded-lg text-white theme-dark-blue hover:text-secondary flex p-2 px-4 justify-center border-4 w-full border-theme_primary_light mb-2 "  :class="($store.state.theme == 'theme-dark-blue') ? 'rounded-full border-theme_secondary text-theme_secondary' : ''">
                        <svg class="bi bi-moon mr-2" width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                        </svg> Blue
                    </div>
                </div>
                <div class="px-2 w-full lg:w-1/3">
                    <div  @click="$store.commit('setTheme','theme-dark')" class="cursor-pointer rounded-lg text-white theme-dark hover:text-secondary flex p-2 px-4 justify-center border-4 w-full border-theme_primary_light mb-2 " :class="($store.state.theme == 'theme-dark') ? 'rounded-full border-theme_secondary text-theme_secondary' : ''">
                        <svg class="bi bi-moon mr-2" width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                        </svg>  Dark
                    </div>
                    </div>

                <button @click="$store.commit('toggleSetting')" class="px-10 py-2 text-primary font-bold border-2 border-primary neu-in hover:neu-out mt-5 rounded-full">
                    Done
                </button>
            </div>
        
        </div>

    </div>
</template>