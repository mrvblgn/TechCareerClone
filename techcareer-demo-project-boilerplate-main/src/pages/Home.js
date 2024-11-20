import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TeknikSozluk from '../components/TeknikSozluk/TeknikSozluk'
import Community from '../components/Community/Community'
import CommunityNelerYaptik from '../components/CommunityNelerYaptik/CommunityNelerYaptik'

function Home() {
	return (
		<>
			<TeknikSozluk />
			<Community />
			<CommunityNelerYaptik />
		</>
	)
}

export default Home