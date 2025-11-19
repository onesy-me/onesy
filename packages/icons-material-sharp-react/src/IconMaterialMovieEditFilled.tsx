import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieEditFilled = (props: IIcon) => {

  return (
    <Icon
      name='MovieEditFilled'

      short_name='MovieEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h80l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v44L480-276v116H80Zm480 40v-123l263-262 123 122-263 263H560Zm263-224 37-39-37-37-38 38 38 38Z"/>
    </Icon>
  );
};

IconMaterialMovieEditFilled.displayName = 'OnesyIconMaterialMovieEditFilled';

export default IconMaterialMovieEditFilled;
