import { getRepository } from 'typeorm';
import Category from '../models/Category';

import AppError from '../errors/AppError';

interface Request {
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<Category> {
    const categoriesRepository = getRepository(Category);

    const checkIfCategoryExist = await categoriesRepository.findOne({
      where: { title },
    });

    if (checkIfCategoryExist) {
      throw new AppError('Category name already used');
    }

    const category = categoriesRepository.create({
      title,
    });

    await categoriesRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
