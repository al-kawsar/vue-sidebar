<script setup>

import { ref } from 'vue';

const is_expanded = ref(localStorage.getItem('is_expanded') === "true");

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;

    localStorage.setItem('is_expanded', is_expanded.value);
};

</script>

<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/vue.svg" alt="">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
        <h3>Menu</h3>

        <div class="menu">
            <router-link class="button" :to="{ name: 'home' }">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" :to="{ name: 'about' }">
                <span class="material-icons">visibility</span>
                <span class="text">About</span>
            </router-link>
            <router-link class="button" :to="{ name: 'team' }">
                <span class="material-icons">group</span>
                <span class="text">Team</span>
            </router-link>
            <router-link class="button" :to="{ name: 'contact' }">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: auto;
    padding: 1rem;
    background-color: var(--dark);
    color: var(--light);
    transition: all .2s ease-out;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: all .2s ease-out;

        .menu-toggle {
            transition: all .2s ease-out;
            color: var(--light);

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: all .2s ease-out;
            }

            &:hover {

                .material-icons {
                    color: var(--primary);
                    transform: translateX(.5rem);
                }

            }
        }
    }

    h3,
    .text {
        transition: .3s ease-out;
        opacity: 0;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            gap: 1rem;
            align-items: center;
            text-decoration: none;
            padding: .5rem 1rem;
            transition: all .2s ease-out;
            color: var(--light);

            .material-icons {
                font-size: 2rem;
                opacity: 1;
            }

            &:hover,
            &.router-link-exact-active {
                background-color: var(--dark-alt);
                color: var(--light);
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }

    }

    h3 {
        color: var(--grey);
        font-size: .8rem;
        margin-bottom: .5rem;
        text-transform: uppercase;
    }

    &.is-expanded {
        width: var(--sidebar-width);
        transition: all .2s ease-out;

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button,
        .text {
            opacity: 1;
        }

    }

    // @media (prefers-color-scheme: light) {
    //     color: #213547;
    //     background-color: var(--light);

    //     .menu-toggle-wrap {
    //         .menu-toggle {
    //             color: var(--dark);

    //             .material-icons {
    //                 color: var(--dark);
    //             }
    //         }
    //     }
    // }

    @media screen and (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }

}
</style>