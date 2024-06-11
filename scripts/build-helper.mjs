import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

export function resolvePath(metaUrl) {
    const __dirname = path.dirname(fileURLToPath(metaUrl || import.meta.url));
    const __workspace = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../');
    const { INPUT_DIR, OUTPUT_DIR } = process.env;
    const INPUT_PATH = path.resolve(__dirname, process.env.INPUT_DIR);
    const OUTPUT_PATH = path.resolve(__dirname, process.env.OUTPUT_DIR);

    return {
        __dirname,
        __workspace,
        INPUT_DIR,
        OUTPUT_DIR,
        INPUT_PATH,
        OUTPUT_PATH
    };
}

export function removeBuild(metaUrl) {
    const { OUTPUT_DIR } = resolvePath(metaUrl);

    fs.remove(OUTPUT_DIR);
}

export function updatePackageJson(localPackageJson) {
    const { __workspace } = resolvePath();
    const packageJson = JSON.parse(fs.readFileSync(path.resolve(__workspace, './package.json'), { encoding: 'utf8', flag: 'r' }));
    const pkg = JSON.parse(fs.readFileSync(localPackageJson, { encoding: 'utf8', flag: 'r' }));

    pkg.version ??= packageJson.version;
    pkg.private = false;
    pkg.author ??= packageJson.author;
    pkg.homepage ??= packageJson.homepage;
    pkg.license ??= packageJson.license;
    pkg.repository = { ...pkg.repository, ...packageJson.repository };
    pkg.bugs = { ...pkg.bugs, ...packageJson.bugs };

    fs.writeFileSync(localPackageJson, JSON.stringify(pkg, null, 4));
}

export function clearPackageJson(localPackageJson) {
    const pkg = JSON.parse(fs.readFileSync(localPackageJson, { encoding: 'utf8', flag: 'r' }));

    delete pkg.scripts;
    delete pkg.devDependencies;

    fs.writeFileSync(localPackageJson, JSON.stringify(pkg, null, 4));
}
