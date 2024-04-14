import { type Configuration, type RuleSetRule } from "webpack"
import { BuildPaths, RuleState } from "../build/types/config"
import path from "path"
import { buildCssLoader } from "../build/loaders/buildCssLoaders"
import { buildSvgLoader } from "../build/loaders/buildSvgLoader"
import webpack from "webpack"

export default ({ config }: { config: Configuration }) => {
    // @ts-ignore
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        locales: "",
        buildLocales: "", 
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push(".ts", ".tsx")

    // @ts-ignore
    config.module.rules = config?.module?.rules?.map((rule: RuleState) => {
        if (/svg/.test(rule?.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config?.module?.rules?.push(buildSvgLoader())
    // @ts-ignore
    config?.module?.rules?.push(buildCssLoader({ isDev: true, isProd: false }))

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS__DEV__: JSON.stringify(true),
            __API__: JSON.stringify(""),
            __PROJECT__: JSON.stringify("storybook"),
        })
    )

    return config
}
