import '../../src/app/styles/index.scss'

import type { Preview } from '@storybook/react'
import StyleDecorator from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator'
import ThemeDecorator from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext'
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
}

export default preview
