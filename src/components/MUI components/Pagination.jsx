import React, { useEffect, useState } from 'react'
import ITEMS_PER_PAGE from '../../instance';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproduct } from '../../store/products';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./pagination.css"
const Pagination = () => {

  const { data } = useSelector((state) => state.products)
  console.log(data);
  const [page, setpage] = useState(1)
  const totalItems = 12;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const handlePage = (page) => {
    setpage(page)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE }
    // console.log(pagination);
    dispatch(fetchproduct(pagination))
  }, [dispatch, page])

  return (
    <div className="w-10/12 rounded-sm  flex items-center justify-between border border-gray-400 bg-transparent px-3 py-2 sm:px-6 mt-8 ml-auto mr-auto mb-10" >
      <div className="flex flex-1 justify-between sm:hidden">
        <div
          onClick={(e) => handlePage(page > 1 ? page - 1 : page)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </div>
        <div
          onClick={(e) => handlePage(page < totalPages ? page + 1 : page)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing{' '}
            <span className="font-medium">
              {(page - 1) * ITEMS_PER_PAGE + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {page * ITEMS_PER_PAGE > totalItems
                ? totalItems
                : page * ITEMS_PER_PAGE}
            </span>{' '}
            of <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <div
              onClick={(e) => handlePage(page > 1 ? page - 1 : page)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-blue-200 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ArrowBackIosNewIcon />
            </div>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

            {Array.from({ length: totalPages }).map((el, index) => (
              <div
                key={index}
                onClick={(e) => handlePage(index + 1)}
                aria-current="page"
                className={`relative cursor-pointer z-10 inline-flex items-center ${index + 1 === page
                    ? 'paginationfocuscol text-white'
                    : 'text-gray-400'
                  } px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {index + 1}
              </div>
            ))}

            <div
              onClick={(e) => handlePage(page < totalPages ? page + 1 : page)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-blue-200 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ArrowForwardIosIcon />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination
