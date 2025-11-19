import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovie = (props: IIcon) => {

  return (
    <Icon
      name='Movie'

      short_name='Movie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h80l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h200v640H80Zm80-400v320h640v-320H160Zm0 0v320-320Z"/>
    </Icon>
  );
};

IconMaterialMovie.displayName = 'OnesyIconMaterialMovie';

export default IconMaterialMovie;
