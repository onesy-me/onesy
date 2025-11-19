import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieEdit = (props: IIcon) => {

  return (
    <Icon
      name='MovieEdit'

      short_name='MovieEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-320 320Zm-80 80v-640h80l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h200v125L765-560H160v320h320v80H80Zm480 40v-123l263-262 123 122-263 263H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
};

IconMaterialMovieEdit.displayName = 'OnesyIconMaterialMovieEdit';

export default IconMaterialMovieEdit;
