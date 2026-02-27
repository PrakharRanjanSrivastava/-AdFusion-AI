

export interface UploadZoneProps {
    lable: string;
    file: File | null;
    onClear: ()=> void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

export interface User {
    id?: string;
    name?: string;
    email?:string;
    
}




   export interface Project {
  id: string;
  name?: string;
  userId?: string;
  user?: User;

  productName: string;
  productDescription?: string;
  userPrompt?: string;

  aspectRatio?: string;
  targetLength?: number;

  generatedImage?: string;
  generatedVideo?: string;

  uploadedImages: string[];

  isGenerating: boolean;
  isPublished: boolean;

  error?: string;
  createdAt: string;
  updatedAt: string;
}




