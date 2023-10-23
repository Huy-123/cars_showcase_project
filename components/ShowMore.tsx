"use client"

import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils';
import { useRouter } from 'next/navigation';
import React from 'react'
import CustomButton from './CustomButton';

function ShowMore({pageNumber, isNext, setLimit}:ShowMoreProps) {
	const router = useRouter()
	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		// const newPathName = updateSearchParams("limit", `${newLimit}`);
		// router.push(newPathName)
		setLimit(newLimit);
	}
	return (
		<div className = "flex-center w-full gap-5 mt-10">
			{!isNext && (
				<CustomButton
				title="Show More"
				containerStyles = " bg-primary-blue text-white rounded-full" 
				handleClick = {handleNavigation} 
				btnType = "button"
			/>
			)}
		</div>
	)
}


export default ShowMore
