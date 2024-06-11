import path from 'path';
import { clearBuild, resolvePath, updatePackageJson } from './build.mjs';

clearBuild(import.meta.url);
updatePackageJson(path.resolve(resolvePath(import.meta.url).__dirname, '../package.json'));
