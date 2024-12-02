import DialogWrapper from "@/src/components/dialog-wrapper";
import {FileCheck, FilePenLine, FilePlus} from "lucide-react";
import PrimaryButton from "@/src/components/primary-button";
import TextInput from "@/src/components/text-input";
import SelectWrapper from "@/src/components/select-wrapper";
import React, {useState} from "react";
import {z} from "zod";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

type Props = {
    book?: {
        id?: string;
        title?: string;
        description?: string;
        author?: string;
        genre?: string;
        publish_date?: string;
        price?: string;
        quantity?: string;
        status?: string;
    };
    isEdit?: boolean;
    handleBookCreate?: (bookData: any) => void;
    handleBookEdit?: (bookData: any) => void;
};

const bookSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long").nonempty("Title is required"),
    description: z.string().min(10, "Description must be at least 10 characters").nonempty("Description is required"),
    author: z.string().min(3, "Author must be at least 3 characters long").nonempty("Author is required"),
    genre: z.string().min(3, "Genre must be at least 3 characters long").nonempty("Genre is required"),
    publish_date: z.string().nonempty("Publish Date is required"),
    price: z.string().nonempty("Price is required"),
    quantity: z.string().nonempty("Quantity is required"),
    status: z.string().nonempty("Status is required"),
    id: z.string().optional()
});

type BookFormValues = z.infer<typeof bookSchema>;

const EditBook = ({book, isEdit = false, handleBookCreate, handleBookEdit}: Props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: {errors},
    } = useForm<BookFormValues>({
        resolver: zodResolver(bookSchema),
        defaultValues: {
            id: book?.id || "",
            title: book?.title || "",
            description: book?.description || "",
            author: book?.author || "",
            genre: book?.genre || "",
            publish_date: book?.publish_date || "",
            price: String(book?.price) || "",
            quantity: String(book?.quantity) || "",
            status: book?.status || "",
        },
    });

    const handleOpenDialog = () => setIsDialogOpen(true);
    const handleCloseDialog = () => setIsDialogOpen(false);

    const onSubmit = async (data: BookFormValues) => {
        try {
            setIsLoading(true);
            if (!isEdit) {
                await handleBookCreate(data);
            } else {
                await handleBookEdit(data);
            }
            reset({
                title: "",
                description: "",
                author: "",
                genre: "",
                publish_date: "",
                price: "",
                quantity: "",
                status: "",
            });
            handleCloseDialog();
        } catch (error) {
            console.error("Error saving book:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const statusOptions = [
        {value: "In Stock", label: "In Stock"},
        {value: "Out of Stoke", label: "Out of Stoke"},
    ];

    return (
        <>
            {isEdit ? (
                <FilePenLine
                    className="cursor-pointer me-2 hover:text-purple-900"
                    onClick={handleOpenDialog}
                />
            ) : (
                <PrimaryButton
                    loading={isLoading}
                    label="Add Book"
                    onClick={handleOpenDialog}
                    icon={<FilePlus/>}
                />
            )}
            <DialogWrapper
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                trigger={<></>}
                title={isEdit ? "Update Book Details" : "Create a New Book"}
                description={
                    isEdit
                        ? "Edit the book details here and click save to apply your changes."
                        : "Enter the book details and click save to create the book."
                }
                footer={<></>}
            >
                <div>
                    <TextInput
                        label="Title"
                        placeholder="Enter book title"
                        error={errors.title?.message}
                        {...register("title")}
                        wrapperStyles="mb-4"
                    />
                    <TextInput
                        label="Description"
                        placeholder="Enter book description"
                        error={errors.description?.message}
                        {...register("description")}
                        wrapperStyles="mb-4"
                    />
                    <TextInput
                        label="Author"
                        placeholder="Enter book author"
                        error={errors.author?.message}
                        {...register("author")}
                        wrapperStyles="mb-4"
                    />
                    <TextInput
                        label="Genre"
                        placeholder="Enter book genre"
                        error={errors.genre?.message}
                        {...register("genre")}
                        wrapperStyles="mb-4"
                    />
                    <TextInput
                        label="Publish Date"
                        placeholder="Enter book publish date"
                        error={errors.publish_date?.message}
                        {...register("publish_date")}
                        wrapperStyles="mb-4"
                    />
                    <TextInput
                        label="Price"
                        placeholder="Enter book price"
                        error={errors.price?.message}
                        type="number"
                        {...register("price")}
                        wrapperStyles="mb-4"
                    />
                    <TextInput
                        label="Quantity"
                        placeholder="Enter book quantity"
                        error={errors.quantity?.message}
                        type="number"
                        {...register("quantity")}
                        wrapperStyles="mb-4"
                    />
                    <Controller
                        name="status"
                        control={control}
                        render={({field}) => (
                            <SelectWrapper
                                label="Status"
                                options={statusOptions}
                                placeholder="Select book status"
                                error={errors.status?.message}
                                {...field}
                            />
                        )}
                    />
                    <div className="w-full flex justify-end items-end">
                        <PrimaryButton
                            label="Save"
                            icon={<FileCheck/>}
                            loading={isLoading}
                            additionalStyles="mt-8 w-32"
                            onClick={handleSubmit(onSubmit)}
                        />
                    </div>
                    </div>
            </DialogWrapper>
        </>
);
};

export default EditBook;
