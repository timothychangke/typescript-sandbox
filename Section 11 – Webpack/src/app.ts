/* 
without webpack:
 - multiple ts files andn imports
 - unoptimised code that is not as small as possible
 - "External" development server needed

 with webpack:
 - code bundles, less imports required
 - optimised minified code, less code to download
 - more build steps can be added easily
*/
import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
