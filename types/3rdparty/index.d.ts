import _ from 'lodash';

declare module 'lodash' {
    interface LoDashStatic {
        xxx(a: string, b: string): string;
    }
}
