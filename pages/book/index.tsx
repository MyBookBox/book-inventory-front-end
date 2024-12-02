import TableWrapper from "../../src/components/TableWrapper";
import ViewBookDrawer from "../../src/book/components/view-book-drawer";
import EditBook from "../../src/book/components/edit-book";
import DeleteBook from "../../src/book/components/delete-book";
import {useEffect, useState} from "react";
import {del, get, post, patch} from "../../src/service/request";
import {toast} from "react-toastify";
import {getUser} from "../../src/shared/utils/stroge-util";
import SearchBar from "../../src/components/search-bar";

const Book = () => {
    const headers = ["No", "Title", "Description", "Author", "Quantity", "Status", 'Action'];
    const [isLoading, setIsLoading] = useState(false)
    const [books, setBooks] = useState([])
    const footerContent = `Total Records: ${books.length}`;
    const user = getUser() ?? {}
    
    const fetchDataFromAPI = async () => {
        try {
            setIsLoading(true);
            const response = await get('book')
            setBooks(response)
        } catch (e) {
            toast.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    const processData = (apiResponse: any) => {
        return apiResponse.map((item: any, index: number) => [
            index + 1,
            item.title,
            item.description,
            item.author,
            item.price,
            <div
                key={`status-${item.id}`}
                className={`w-28 text-center rounded-full p-2 ${item.status == 'In Stock' ? 'bg-purple-100 text-purple-900' : 'bg-red-100 text-red-900'}`}
            >
                {item.status}
            </div>,
            <div key={`action-${item.id}`} className='flex'>
                {
                    user['role'].includes('Admin') && (
                        <>
                            <EditBook book={item} isEdit={true} handleBookEdit={handleBookEdit}/>
                            <DeleteBook book={item} handleBookDelete={handleUserDelete}/>
                        </>
                    )
                }
                <ViewBookDrawer book={item}/>
            </div>
        ]);

    };

    const handleBookCreate = async (data: any) => {
        try {
            const request = {
                title: data['title'],
                author: data['author'],
                publish_date: data['publish_date'],
                price: Number(data['price']),
                quantity: Number(data['quantity']),
                status: data['status'],
                genre: data['genre'],
                description: data['description'],
            }
            setIsLoading(true);
            const response = await post('book', request)
            setBooks((prevData: any) => [...prevData, response]);
            toast.success("Successfully book created")
        } catch (e) {
            toast.error(e)
        } finally {
            setIsLoading(false);
        }
    };

    const handleBookEdit = async (data: any) => {
        try {
            const request = {
                title: data['title'],
                author: data['author'],
                publish_date: data['publish_date'],
                price: Number(data['price']),
                quantity: Number(data['quantity']),
                status: data['status'],
                genre: data['genre'],
                description: data['description'],
            }
            setIsLoading(true);
            const response = await patch(`book/${data['id']}`, request)
            const index = books.findIndex(
                (book: any) => book?.id === data?.id
            );
            const updatedBooks = [...books];
            updatedBooks[index] = response;
            setBooks(updatedBooks);
            toast.success("Successfully book updated")
        } catch (e) {
            toast.error(e)
        } finally {
            setIsLoading(false);
        }
    };

    const handleUserDelete = async (deletedBook: any) => {
        try {
            await del(`book/${deletedBook.id}`);
            toast.success("Book successfully deleted");
            setBooks((prevBooks) =>
                prevBooks.filter((book) => book.id !== deletedBook.id)
            );
        } catch (error) {
            toast.error("Failed to delete user");
        }
    };

    const handleBookSearch = async (query: string) => {
        try {
            setIsLoading(true);
            if (query != '') {
                const response = await get(`book/search?query=${query}`)
                setBooks(response)
            } else {
                const response = await get(`book`)
                setBooks(response)
            }

        } catch (error) {
            toast.error("Failed to book search");
        }
    };

    useEffect(() => {
        fetchDataFromAPI()
    }, []);

    return <>
        <div className='text-4xl text-purple-900'>Books</div>
        <div className='text-md text-gray-600 my-4'>You can manage your books here by adding, editing, or deleting them.</div>
        <div className='flex justify-end'>
            {
                user['role'] && user['role'].includes('Admin') &&
                <div className='w-40'>
                    <EditBook isEdit={false} handleBookCreate={handleBookCreate}/>
                </div>
            }
        </div>
        <SearchBar onSearch={handleBookSearch}/>
        <div className='mt-8'>
            <TableWrapper
                headers={headers}
                data={processData(books)}
                footerContent={footerContent}
                className="border border-gray-200"
            />
        </div>
    </>
}
export default Book