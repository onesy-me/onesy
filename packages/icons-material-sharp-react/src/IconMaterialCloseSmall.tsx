import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseSmall = (props: IIcon) => {

  return (
    <Icon
      name='CloseSmall'

      short_name='CloseSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
    </Icon>
  );
};

IconMaterialCloseSmall.displayName = 'OnesyIconMaterialCloseSmall';

export default IconMaterialCloseSmall;
