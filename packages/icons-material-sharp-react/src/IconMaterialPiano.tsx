import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPiano = (props: IIcon) => {

  return (
    <Icon
      name='Piano'

      short_name='Piano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h130v-180h-50v-380h-80v560Zm430 0h130v-560h-80v380h-50v180Zm-240 0h180v-180h-50v-380h-80v380h-50v180Z"/>
    </Icon>
  );
};

IconMaterialPiano.displayName = 'OnesyIconMaterialPiano';

export default IconMaterialPiano;
