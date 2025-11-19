import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieW100 = (props: IIcon) => {

  return (
    <Icon
      name='MovieW100'

      short_name='Movie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h60l54 108h120l-54-108h80l54 108h120l-54-108h80l54 108h120l-54-108h116v536H132Zm28-400v372h640v-372H160Zm0 0v372-372Z"/>
    </Icon>
  );
};

IconMaterialMovieW100.displayName = 'OnesyIconMaterialMovieW100';

export default IconMaterialMovieW100;
