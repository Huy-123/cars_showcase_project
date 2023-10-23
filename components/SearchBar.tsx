"use client"
import React from "react";
import { useState } from "react";
import { SearchManufacturer } from "./"
import Image from "next/image";
import { useRouter } from "next/navigation";



function SearchButton ({otherClasses}: {otherClasses: string}){
	return(
		<button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
			<Image 
				src="/magnifying-glass.svg"
				alt="magnifying glass"
				width={40}
				height={40}
				className="object-contain"
			/>
		</button>
	)
}

function SearchBar({setManufacturer, setModel}:{setManufacturer:any, setModel:any}) {
	const [searchManufacturer, setSearchManufacturer] = useState("");
	const [searchModel, setSearchModel] = useState("");
	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault();

		if(searchManufacturer === '' && searchModel === ''){
			return(alert('Please Fill in the search bar'))
		}
		setManufacturer(searchManufacturer)
		setModel(searchModel)
	};

	// const updateSearchParams = (model: string, manufacturer: string) => {
	// 	const searchParams = new URLSearchParams(window.location.search);

	// 	if(model){
	// 		searchParams.set('model', model);
	// 	}else{
	// 		searchParams.delete('model')
	// 	}

	// 	if(manufacturer){
	// 		searchParams.set('manufacturer', manufacturer);
	// 	}else{
	// 		searchParams.delete('manufacturer')
	// 	}

	// 	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
	// 	router.push(newPathname);
		
	// }

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					selected = {searchManufacturer}
					setSelected = {setSearchManufacturer}
				/>
				<SearchButton otherClasses="sm:hidden"/>
			</div>
			<div className="searchbar__item">
			<Image
					src="/model-icon.png"
					alt="car model"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
				/>
				<input
					type="text"
					name="model"
					value={searchModel}
					onChange={(e) => setSearchModel(e.target.value)}
					placeholder="Tiguan"
					className="searchbar__input"
				/>
				<SearchButton otherClasses="sm:hidden"/>
			</div>
			<SearchButton otherClasses="max-sm:hidden"/>
		</form>
	)
}


export default SearchBar
