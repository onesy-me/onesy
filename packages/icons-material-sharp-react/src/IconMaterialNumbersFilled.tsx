import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNumbersFilled = (props: IIcon) => {

  return (
    <Icon
      name='NumbersFilled'

      short_name='Numbers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>
    </Icon>
  );
};

IconMaterialNumbersFilled.displayName = 'OnesyIconMaterialNumbersFilled';

export default IconMaterialNumbersFilled;
