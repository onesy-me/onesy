import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGifBoxFilled = (props: IIcon) => {

  return (
    <Icon
      name='GifBoxFilled'

      short_name='GifBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm180-280h120v-80h-40v40h-40v-80h80v-40H300v160Zm160 0h40v-160h-40v160Zm80 0h40v-60h60v-40h-60v-20h80v-40H540v160Z"/>
    </Icon>
  );
};

IconMaterialGifBoxFilled.displayName = 'OnesyIconMaterialGifBoxFilled';

export default IconMaterialGifBoxFilled;
