import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Image from 'next/image';

export default function addCustomer() {
    return (
        <div>
            <Head>
                <title>Add Customer</title>
            </Head>
            <Image 
                    classname={styles.landingImage}
                    src="/../public/beachshowcase.jpg"
                    layout="fill"
                    objectFit="cover"
                    position="absolute"
                    />
            <Nav />

            {/* Name and Log. */}
            <div className={hStyles.container}>
                <h1>Add a New Customer</h1>
            </div>

            <div className={styles.container}>
                <form className={styles.form}>
                    <div className={styles.formItem}>
                        <label>Name<span class="reqField">*</span></label>
                        <input
                            type="text"
                            name="customer_name"
                            placeholder="title"
                            id="customer_name"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <div className={styles.formItem}>
                            <label>Log</label>
                            <textarea
                                name="log"
                                placeholder="Post content"
                                id="log"
                            />
                        </div>
                    </div>

                    <div className={styles.formItem}>
                            <button type="submit">Add</button>
                    </div>

                </form>
            </div>
        </div>
    );
}