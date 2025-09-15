import type { Payload } from 'payload'

export const seedFooter = async (payload: Payload) => {
  try {
    const existingFooter = await payload.findGlobal({
      slug: 'footer',
    })

    if (!existingFooter || !existingFooter.footerNav || existingFooter.footerNav.length === 0) {
      await payload.updateGlobal({
        slug: 'footer',
        data: {
          footerNav: [
            { label: 'About Us', url: '/about', newTab: false },
            { label: 'Solutions', url: '/solutions', newTab: false },
            { label: 'Case Studies', url: '/case-studies', newTab: false },
            { label: 'Testimonials', url: '/testimonials', newTab: false },
          ],
          resourceLinks: [
            { title: 'Insights & Blog', link: '/resources' },
            { title: 'Book Consultation', link: '/appointments' },
          ],
          copyrightText: '© 2024 Nexus Consultancy. All rights reserved.',
          companyInfo: {
            name: 'Nexus',
            tagline: 'Preparing for a Smarter Tomorrow',
          },
        },
      })

      console.log('✅ Footer global seeded successfully')
    }
  } catch (error) {
    console.error('❌ Error seeding footer:', error)
  }
}

export const seedTeamMembers = async (payload: Payload) => {
  try {
    const existingMembers = await payload.find({
      collection: 'teamMembers',
      limit: 1,
    })

    if (existingMembers.totalDocs === 0) {
      const teamMembers = [
        {
          name: 'Jacob Biese',
          title: 'CEO & Founder',
          slug: 'jacob-biese',
          slugLock: false,
          bio: 'Visionary leader driving operational excellence.',
        },
        {
          name: 'Hashir Azam',
          title: 'Principal Automation Architect',
          slug: 'hashir-azam',
          slugLock: false,
          bio: 'Expert in automation and process optimization.',
        },
        {
          name: 'Muhammad Isaiah Brown',
          title: 'Principal Solutions Consultant',
          slug: 'isaiah-brown',
          slugLock: false,
          bio: 'Strategic consultant specializing in business solutions.',
        },
        {
          name: 'Awais Mulla',
          title: 'Nexus Advisor',
          slug: 'awais-mulla',
          slugLock: false,
          bio: 'Strategic advisor with deep industry expertise.',
        },
      ]

      const createdMembers = []
      for (const member of teamMembers) {
        const createdMember = await payload.create({
          collection: 'teamMembers',
          data: member,
        })
        createdMembers.push(createdMember)
      }

      console.log('✅ Team members seeded successfully')

      // Now update footer with team links
      const teamLinks = createdMembers.map((member) => ({
        member: member.id,
        labelOverride: null,
      }))

      await payload.updateGlobal({
        slug: 'footer',
        data: {
          teamLinks,
        },
      })

      console.log('✅ Footer updated with team links')
    }
  } catch (error) {
    console.error('❌ Error seeding team members:', error)
  }
}
