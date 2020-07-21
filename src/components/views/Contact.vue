<template>
    <div>
        <v-img
            :src="require('@/assets/contact.jpg')"
            :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
            gradient="to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)"
            flat
            max-width="100%"
            tile
        >
            <v-row
                align="center"
                class="ma-0 fill-height text-center"
                justify="center"
            >
                <v-col cols="12">
                    <h1 class="secondary--text mb-4">CONTACT US</h1>
                    <v-divider class="primary divider ma-auto"/>
                </v-col>
            </v-row>
        </v-img> 
        <v-container>
            <v-row>
                <v-col sm="6">
                    <h2 class="mb-2">KEEP IN TOUCH WITH US</h2>
                    <v-divider class="primary divider mb-5"/>
                    <v-card>
                        <v-card-title>Adishwar Tele-Networks</v-card-title>
                        <v-card-subtitle class="primary--text mt-2">HEAD OFFICE</v-card-subtitle>
                        <v-card-text>
                            <p>#139, 2nd Main, 8th Cross, Chamrajpet,Bangalore - 560018,Karnataka, India</p>
                            <p><v-icon>mdi-phone-classic</v-icon> +91 80 26603114</p>
                            <p><v-icon>mdi-fax</v-icon> +91 80 22423522</p>
                            <p><v-icon>mdi-cellphone-android</v-icon> +91 9448395909</p>
                            <p><v-icon>mdi-email</v-icon> info@adishwar.co.in, jitesh@adishwar.co.in</p> 
                        </v-card-text>
                        <v-card-subtitle class="primary--text">BRANCH OFFICE</v-card-subtitle>
                        <v-card-text>
                            <p>#224, 1st Floor DDA Complex, Jhandewalan Extension, New Delhi – 110 055, India</p>
                            <p><v-icon>mdi-phone-classic</v-icon> +91 11 23631573</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col sm="6">
                    <h2 class="mb-2">MAIL US YOUR MESSAGE</h2>
                    <v-divider class="primary divider mb-5"/>
                    <v-form v-model="feedbackForm" ref="feedbackData">
                        <v-text-field
                            v-model="name"
                            label="Name"
                            single-line
                            outlined 
                            dense
                            :rules="[v => !!v || 'Name is required']"
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            label="Email"
                            single-line
                            outlined
                            dense
                            :rules=" [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',]"
                        ></v-text-field>
                        <v-text-field
                            v-model="subject"
                            label="Subject"
                            single-line
                            outlined
                            dense
                            :rules="[v => !!v || 'Subject is required']"
                        ></v-text-field>
                        <v-textarea
                            v-model="description"
                            single-line
                            outlined
                            label="Your Need & Description"
                        ></v-textarea>
                        <v-btn class="ma-2" 
                            outlined
                            @click="formData()"
                            :disabled="(name && email && subject)? false:true"
                            color="accent">Send Message
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container> 
    </div>
</template>
<script>
export default {
    name:'Contact',
    data:()=>({
       feedbackForm:true,
       name:'',
       email:'',
       subject:'',
       description:'',
    }),
    methods:{
        formData(){
            const data = {
                name:this.name,
                email:this.email,
                subject:this.subject,
                description:this.description
            }
            window.open(`mailto:contactus@magtrak.com?subject=${this.subject}&body=${JSON.stringify(data)}`)
            this.$refs.feedbackData.reset()
        }
    }
}
</script>
<style lang="scss" scoped>
.divider {
    max-width: 40px;
    border-width: 3px 0 0 0 !important
}
</style>