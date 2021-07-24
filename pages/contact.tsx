import Head from 'next/head';
import { useState } from 'react';

import Layout from '../components/Layout'

export default function Contact() {

        return (
            <Layout>
            <div>
            <div className="relative bg-white mt-1">
            <Head>
                    <title>Kalani Flowers - Get in Touch</title>
                </Head>
                <div className="relative max-w-7xl mx-auto">
                    <div className="bg-almond-200 py-16 px-4 sm:px-6 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-6xl lg:text-6xl text-mongoose-500 sm:text-3xl font-maldives">
                                Get In Touch
                            </h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                                Have any questions about any products? Have a collaboration idea? Send me an email and we'll chat!
                            </p>
                            <dl className="mt-8 text-base text-gray-500">
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-3">
                                            jordyn@kalani-co.com.au
                                        </span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </Layout>
        );
    }