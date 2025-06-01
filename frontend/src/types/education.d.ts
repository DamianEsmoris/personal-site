type EducationItemType = 'fromal' | 'course';

type EducationItem = {
    id: number,
    name: string,
    type: EducationItemType,
    started: Date,
    ended: Date | null,
    description: string | null,
    certificate: string | null,
}
