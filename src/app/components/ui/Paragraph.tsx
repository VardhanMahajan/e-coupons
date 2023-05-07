import {FC, HTMLAttributes} from 'react';
import {cva, VariantProps} from 'class-variance-authority';



const paragraphvariants = cva("max-ww-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
    {
        variants:{
            size:{
                default:'text-base sm:text-lg',
                sm:'text-sm, sm:text-base',
            },
        },
        default:{
            size:'default',
        },
    }
)


interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphvariants> {}

const Paragraph: forwardRef<HTMLParagraphElement, ParagraphProps> = ({}) =>{
    return <div>Paragraph</div>
}

export default Paragraph