import React, { memo } from 'react'
import ApartmentContainer from '../../../components/Admin/Apartment/ApartmentContainer'

const index = memo(function Index() {
  return <ApartmentContainer isCreate={true} />
})

export default index
