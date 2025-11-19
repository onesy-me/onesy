import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotesFilled = (props: IIcon) => {

  return (
    <Icon
      name='NotesFilled'

      short_name='Notes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </Icon>
  );
};

IconMaterialNotesFilled.displayName = 'OnesyIconMaterialNotesFilled';

export default IconMaterialNotesFilled;
