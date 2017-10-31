import { RuckenTodoCoreRuI18n } from './i18n/ru.i18n';
export { RuckenTodoCoreRuI18n } from './i18n/ru.i18n';
import { TodoChangesService } from './shared/services/todo-changes.service';
export { TodoChangesService } from './shared/services/todo-changes.service';
import { TodoProjectsService } from './shared/services/todo-projects.service';
export { TodoProjectsService } from './shared/services/todo-projects.service';
import { TodoStatusesService } from './shared/services/todo-statuses.service';
export { TodoStatusesService } from './shared/services/todo-statuses.service';
import { TodoTasksService } from './shared/services/todo-tasks.service';
export { TodoTasksService } from './shared/services/todo-tasks.service';
import { ShortTodoProject } from './shared/models/short-todo-project.model';
export { ShortTodoProject } from './shared/models/short-todo-project.model';
import { TodoChange } from './shared/models/todo-change.model';
export { TodoChange } from './shared/models/todo-change.model';
import { TodoProject } from './shared/models/todo-project.model';
export { TodoProject } from './shared/models/todo-project.model';
import { TodoStatus } from './shared/models/todo-status.model';
export { TodoStatus } from './shared/models/todo-status.model';
import { TodoTask } from './shared/models/todo-task.model';
export { TodoTask } from './shared/models/todo-task.model';
export const RuckenTodoCoreModules: any[] = [];
export const RuckenTodoCoreComponents: any[] = [];
export const RuckenTodoCoreShareds: any[] = [RuckenTodoCoreRuI18n, ShortTodoProject, TodoChange, TodoProject, TodoStatus, TodoTask];
export const RuckenTodoCoreServices: any[] = [TodoChangesService, TodoProjectsService, TodoStatusesService, TodoTasksService];
export const RuckenTodoCorePipes: any[] = [];
