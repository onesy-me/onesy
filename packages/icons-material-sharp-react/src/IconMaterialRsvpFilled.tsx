import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRsvpFilled = (props: IIcon) => {

  return (
    <Icon
      name='RsvpFilled'

      short_name='Rsvp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-360v-240h200v156h-36l36 84h-60l-34-80h-46v80H40Zm240 0v-60h120v-30H280v-150h180v60H340v30h120v150H280Zm290 0-70-240h60l40 137 40-137h60l-70 240h-60Zm150 0v-240h200v160H780v80h-60ZM100-500h80v-40h-80v40Zm680 0h80v-40h-80v40Z"/>
    </Icon>
  );
};

IconMaterialRsvpFilled.displayName = 'OnesyIconMaterialRsvpFilled';

export default IconMaterialRsvpFilled;
