<template>
    <div>
        <v-app id="inspire">

            <v-app-bar color="primary"/>
            <v-navigation-drawer color="secondary"/>

            <v-content class="bg-red blue">
                <slot/>
            </v-content>
        </v-app>
    </div>
</template>
