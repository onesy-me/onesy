import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovie = (props: IIcon) => {

  return (
    <Icon
      name='Movie'

      short_name='Movie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-800 65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z"/>
    </Icon>
  );
};

IconMaterialMovie.displayName = 'OnesyIconMaterialMovie';

export default IconMaterialMovie;
